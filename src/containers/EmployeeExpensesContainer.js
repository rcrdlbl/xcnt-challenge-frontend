import React from 'react'
import styled from 'styled-components'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'

import SingleExpense from '../components/SingleExpense'

const EmployeeExpenseListWrapper = styled.div`
  max-width: 30em;
  margin 0 auto;
`

const EmployeeName = styled.div`
  color: #292929;
  font-weight: bold;
  font-size: 2rem;
`

const GET_EMPLOYEE = gql`
   query Employee($id: ID!) {
     employee(id: $id) {
       firstName
       lastName
       expenses {
         id
         amount
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
   }
`

function buildEmployeeExpenseList(employee) {
  return employee.expenses.map((expense) => <SingleExpense key={expense.id} expense={expense} />)
}

function EmployeeExpensesContainer(props) {
  const { loading, error, data } = useQuery(GET_EMPLOYEE, {
    variables: {id: props.match.params.id}
  })

  if (loading) return <h1>Loading</h1>
  if (error) return <h1>Error</h1>

  return(
    <EmployeeExpenseListWrapper>
      <EmployeeName>{data.employee.firstName} {data.employee.lastName}</EmployeeName>
      {buildEmployeeExpenseList(data.employee)}
    </EmployeeExpenseListWrapper>
  )
}

export default EmployeeExpensesContainer
