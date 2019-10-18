import React from 'react'
import { useMutation } from '@apollo/react-hooks'
import styled, { ThemeProvider } from 'styled-components'
import { gql } from 'apollo-boost'

import ApprovalButtons from './ApprovalButtons'

const ExpenseWrapper = styled.div`
  margin: 0.75em;
  padding: 0;
  overflow: hidden;
  border: 1px solid black;
  border-radius: 10px;
  background-color: ${(props) => props.theme.white};
`

const UPDATE_APPROVED = gql`
  mutation UpdateApproved($id: ID!, $approved:Boolean!) {
    updateExpenseApproved(input: {id: $id, approved: $approved}) {
      expense {
        id
        amount
        approved
        currency
        description
      }
    }
  }
`

const SingleExpense = (props) => {

  const theme = {
    white: "#FFF",
    offWhite: "rgb(251, 248, 244)",
    offBlack: "#292929",
    lightGreen: "#6cb862",
    darkGreen: "#439159"
  }

  const [updateApproved, { data }] = useMutation(UPDATE_APPROVED)

  let expenseApprovedString = "Awaiting Approval"

  if (props.expense.approved === true) {
    expenseApprovedString = "Approved"
  }

  if (props.expense.approved === false) {
    expenseApprovedString = "Declined"
  }

  return(
    <ThemeProvider theme={theme}>
      <ExpenseWrapper>
        <p>
          {props.expense.employee.firstName} {props.expense.employee.lastName}
        </p>
        <p>
          {props.expense.amount} {props.expense.currency}
        </p>
        <p>
          {expenseApprovedString}
        </p>
        <p>{props.expense.description}</p>
        <ApprovalButtons id={props.expense.id} updateApproved={updateApproved} />
      </ExpenseWrapper>
    </ThemeProvider>
  )
}

export default SingleExpense
