import React, { useState } from 'react'
import styled from 'styled-components'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'

import ExpenseListContainer from './ExpenseListContainer'
import SortTools from '../components/SortTools'

// Styles

const EmployeeExpenseListWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const MainContent = styled.div`
  max-width: 30em;
`

const SortWrapper = styled.div`
  top: 0;
  position: sticky;
  margin-right: 1.5em;
`

const EmployeeName = styled.div`
  margin: 1.2rem;
  color: #292929;
  font-weight: bold;
  font-size: 2rem;
`

// Query

const GET_EMPLOYEE = gql`
   query Employee($id: ID!) {
     employee(id: $id) {
       firstName
       lastName
     }
   }
`

function EmployeeExpensesContainer(props) {

  // Set Sorting

  const [sortBy, setSortBy] = useState("Date")
  const [sortDirection, setSortDirection] = useState("DESC")

  const changeSort = (attribute, direction) => {
    setSortBy(attribute)
    setSortDirection(direction)
    window.scrollTo(0,0)
  }

  // Load Employee Name

  const { loading, error, data } = useQuery(GET_EMPLOYEE, {
    variables: {id: props.match.params.id}
  })

  if (loading) return <h1>Loading</h1>
  if (error) return <h1>Error</h1>

  return(
    <EmployeeExpenseListWrapper>
      <SortWrapper>
        <SortTools changeSort={changeSort} sortBy={sortBy} sortDirection={sortDirection}/>
      </SortWrapper>
      <MainContent>
        <EmployeeName>{data.employee.firstName} {data.employee.lastName}</EmployeeName>
        <ExpenseListContainer employee={true} id={props.match.params.id} sortBy={sortBy} sortDirection={sortDirection} />
      </MainContent>
    </EmployeeExpenseListWrapper>
  )
}

export default EmployeeExpensesContainer
