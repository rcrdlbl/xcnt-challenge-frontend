import React, { Component } from 'react';
import SingleExpense from './SingleExpense';
import styled from 'styled-components';

const LoadMore = styled.div`
  padding: 0.5em;
  border-radius: 10px;
  cursor: pointer;
  text-align: center;
  font-weight: bold;
  font-size: 1.4em;
  margin: 1.2em;
  background-color: #292929;
  color: #FBF8F4;
`



class ExpenseList extends Component {

  buildList(expenses) {
    return expenses.map((expense) => (<SingleExpense key={expense.node.id} expense={expense.node}/>))
  }

  render() {
    return(
      <>
        {this.buildList(this.props.entries)}
        <LoadMore onClick={this.props.onLoadMore}>Load More</LoadMore>
      </>
    )
  }
}

export default ExpenseList
