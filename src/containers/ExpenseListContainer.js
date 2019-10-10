import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

import SingleExpense from '../components/SingleExpense'

const EXPENSES = gql`
  {
    expenses {
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
`

function ExpenseListContainer() {
  const { loading, error, data } = useQuery(EXPENSES)

  if (loading) return <h1>Loading</h1>
  if (error) return <h1>Error</h1>

  console.log(data.expenses)

  return data.expenses.map((expense) => (<SingleExpense key={expense.id} expense={expense}/>))
}

export default ExpenseListContainer
