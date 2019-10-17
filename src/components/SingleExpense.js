import React from 'react'
import { useMutation } from '@apollo/react-hooks'
import styled from 'styled-components'
import { gql } from 'apollo-boost'

import ApprovalButtons from './ApprovalButtons'

const ExpenseWrapper = styled.div`
  margin: 0.75em;
  padding: 0;
  overflow: hidden;
  border: 1px solid black;
  border-radius: 10px;
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
  const [updateApproved, { data }] = useMutation(UPDATE_APPROVED)

  return(
    <ExpenseWrapper>
      <p>
        {props.expense.employee.firstName} {props.expense.employee.lastName}
      </p>
      <p>
        {props.expense.amount} {props.expense.currency}
      </p>
      <p>{props.expense.description}</p>
      <ApprovalButtons />
    </ExpenseWrapper>
  )
}

export default SingleExpense
