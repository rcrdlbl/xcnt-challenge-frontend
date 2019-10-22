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
  const { data, loading, error, fetchMore } = useQuery(
    EXPENSES_QUERY
  );

  if (loading) return <h1>Loading</h1>
  if (error) return <h1>Error</h1>


 return (
    <ExpenseList
      entries={data.expensesConnection.edges || []}
      onLoadMore={ () =>
        fetchMore({
          variables: {
            cursor: data.expensesConnection.pageInfo.endCursor
          },
          updateQuery: (previousResult, { fetchMoreResult }) => {
            console.log(fetchMoreResult)
            console.log(previousResult)
            const newEdges = fetchMoreResult.expensesConnection.edges
            const pageInfo = fetchMoreResult.expensesConnection.pageInfo

            return newEdges.length
              ? {
                expensesConnection: {
                    __typename: previousResult.expensesConnection.__typename,
                    edges: [...previousResult.expensesConnection.edges, ...newEdges],
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
