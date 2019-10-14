import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

import ExpenseList from '../components/ExpenseList'

const EXPENSES_QUERY = gql`
query Expenses($cursor: String) {
  expensesConnection(first: 20, after: $cursor) {
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
`

function ExpenseListContainer() {
  const { data, loading, fetchMore } = useQuery(
    EXPENSES_QUERY
  );

  if (loading) return <h1>Loading</h1>

 return (
    <ExpenseList
      entries={data.expensesConnection.edges || []}
      onLoadMore={ () =>
        fetchMore({
          variables: {
            cursor: data.expenses.pageInfo.endCursor
          },
          updateQuery: (previousResult, { fetchMoreResult }) => {
            const newEdges = fetchMoreResult.expensesConnection.edges
            const pageInfo = fetchMoreResult.expensesConnection.pageInfo

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
        })
      }
      />
  )
}

export default ExpenseListContainer
