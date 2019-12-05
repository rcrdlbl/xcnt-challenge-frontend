import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

import ExpenseList from "../components/ExpenseList";

const EXPENSES_QUERY = gql`
  query Expenses(
    $cursor: String
    $sortDate: String
    $sortAmount: String
    $awaitingApproval: Boolean
    $employeeId: ID
  ) {
    expenses(
      first: 20
      after: $cursor
      sortDate: $sortDate
      sortAmount: $sortAmount
      awaitingApproval: $awaitingApproval
      employeeId: $employeeId
    ) {
      edges {
        node {
          id
          amount
          createdAt
          approved
          currency
          description
          employee {
            id
            firstName
            lastName
          }
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
`;

function ExpenseListContainer({ sortBy, sortDirection, employee, id }) {
  // Logic for sorting and filtering

  let sortVars = {};

  if (sortBy === "awaitingApproval") {
    sortVars = { awaitingApproval: true };
  } else if (sortBy === "Date") {
    sortVars = { sortDate: sortDirection };
  } else {
    sortVars = { sortAmount: sortDirection };
  }

  if (employee) {
    sortVars.employeeId = id;
  }

  // Query Hooks

  const { data, loading, error, fetchMore } = useQuery(EXPENSES_QUERY, {
    variables: sortVars
  });

  if (loading) return <h1>Loading</h1>;
  if (error) return <h1>Error</h1>;

  // Refer to apollo graphql's pagination docs for an explanation of the pagination logic

  return (
    <ExpenseList
      entries={data.expenses.edges || []}
      onLoadMore={() =>
        fetchMore({
          variables: {
            cursor: data.expenses.pageInfo.endCursor
          },
          updateQuery: (previousResult, { fetchMoreResult }) => {
            const newEdges = fetchMoreResult.expenses.edges;
            const { pageInfo } = fetchMoreResult.expenses;

            return newEdges.length
              ? {
                  expenses: {
                    __typename: previousResult.expenses.__typename,
                    edges: [...previousResult.expenses.edges, ...newEdges],
                    pageInfo
                  }
                }
              : previousResult;
          }
        })}
    />
  );
}

export default ExpenseListContainer;
