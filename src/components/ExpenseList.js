import React, { Component } from "react";
import styled from "styled-components";
import SingleExpense from "./SingleExpense";

// Styles
const LoadMore = styled.div`
  padding: 0.5em;
  border-radius: 10px;
  cursor: pointer;
  text-align: center;
  font-weight: bold;
  font-size: 1.4em;
  margin: 1.2em;
  margin-bottom: 3em;
  background-color: #292929;
  color: #fbf8f4;
`;

class ExpenseList extends Component {
  buildList(expenses) {
    return expenses.map(expense => (
      <SingleExpense key={expense.node.id} expense={expense.node} />
    ));
  }

  render() {
    return (
      <>
        {this.buildList(this.props.entries)}
        <LoadMore onClick={this.props.onLoadMore}>Load More</LoadMore>
      </>
    );
  }
}

export default ExpenseList;
