import React from 'react'
import styled from 'styled-components'

const ExpenseWrapper = styled.div`
  margin: 0.75em;
  padding: 0.75em;
  border: 1px solid black;
  border-radius: 10px;
`

const SingleExpense = (props) => {
  return(
    <ExpenseWrapper>
      <p>
        {props.expense.employee.firstName} {props.expense.employee.lastName}
      </p>
      <p>
        {props.expense.amount} {props.expense.currency}
      </p>
      <p>{props.expense.description}</p>
    </ExpenseWrapper>
  )
}

export default SingleExpense
