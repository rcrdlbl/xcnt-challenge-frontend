import React from "react";
import { useMutation } from "@apollo/react-hooks";
import styled, { ThemeProvider } from "styled-components";
import { gql } from "apollo-boost";
import { Link } from "react-router-dom";

import { Icon } from "react-icons-kit";
import { chevronRight } from "react-icons-kit/typicons/chevronRight";

import ApprovalButtons from "./ApprovalButtons";

// Styles
const ExpenseWrapper = styled.div`
  margin: 1.2em;
  padding: 0;
  padding-top: 1em;
  overflow: hidden;
  border: none;
  border-radius: 10px;
  background-color: ${props => props.theme.baseBackground};
  -webkit-box-shadow: 1px 2px 10px 6px rgba(0, 0, 0, 0.39);
  box-shadow: 1px 2px 10px 6px rgba(0, 0, 0, 0.39);
  transition: 1s all ease-in-out;
`;

const EmployeeName = styled(Link)`
  color: ${props => props.theme.baseFontColor};
  display: inline;
  margin-left: 1em;
  border-radius: 10px;
  transition: 1s all ease-in-out;
`;

const ApprovalBadge = styled.div`
  display: inline;
  margin-left: 1em;
  padding: 0.25em;
  border-radius: 5px;
  font-weight: bolder;
  font-style: oblique;
  color: ${props => props.theme.offWhite};
  background-color: ${props => props.theme.badgeBackground};
  transition: 1s all ease-in-out;
`;

const Price = styled.div`
  color: ${props => props.theme.baseFontColor};
  padding: 1em;
  transition: 1s all ease-in-out;
`;

const Description = styled.div`
  color: ${props => props.theme.baseFontColor};
  padding: 1em;
  transition: 1s all ease-in-out;
`;

// Mutations
const UPDATE_APPROVED = gql`
  mutation UpdateApproved($id: ID!, $approved: Boolean!) {
    updateExpenseApproved(input: { id: $id, approved: $approved }) {
      expense {
        id
        amount
        approved
        currency
        description
      }
    }
  }
`;

const SingleExpense = ({ expense }) => {
  const isLoading = false;

  // Theme for component and children

  const theme = {
    white: "#FFF",
    grey: "#f5f5f5",
    offWhite: "rgb(251, 248, 244)",
    offBlack: "#292929",
    lightGreen: "#6cb862",
    darkGreen: "#439159",
    seafoam: "#54D5AF",
    lightRed: "#FF4F00",
    darkRed: "#A53030",
    baseBackground: "#f5f5f5",
    baseFontColor: "#292929",
    badgeBackground: "#FF4F00"
  };

  if (expense.approved === true) {
    theme.baseBackground = "#B9FFAF";
    theme.baseFontColor = "#00450D";
    theme.badgeBackground = "#00450D";
  }

  if (expense.approved === false) {
    theme.baseBackground = "#FFAFAF";
    theme.baseFontColor = "#590000";
    theme.badgeBackground = "#590000";
  }

  // Query Functions

  const [updateApproved] = useMutation(UPDATE_APPROVED);

  // Badge Updating

  let expenseApprovedString = "Awaiting Approval";

  if (expense.approved === true) {
    expenseApprovedString = "Approved";
  }

  if (expense.approved === false) {
    expenseApprovedString = "Declined";
  }

  return (
    <ThemeProvider theme={theme}>
      <ExpenseWrapper>
        <EmployeeName to={`/employee/${  expense.employee.id}`}>
          {expense.employee.firstName} 
{' '}
<b>{expense.employee.lastName}</b>
          <Icon icon={chevronRight} />
        </EmployeeName>
        <Price>
          <b>{expense.amount}</b> 
{' '}
<i>{expense.currency}</i>
        </Price>
        <ApprovalBadge>{expenseApprovedString}</ApprovalBadge>
        <Description>{expense.description}</Description>
        <ApprovalButtons
          id={expense.id}
          approved={expense.approved}
          updateApproved={updateApproved}
          isLoading={isLoading}
        />
      </ExpenseWrapper>
    </ThemeProvider>
  );
};

export default SingleExpense;
