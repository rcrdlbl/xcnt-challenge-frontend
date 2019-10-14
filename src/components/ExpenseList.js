import React, { Component } from 'react';
import SingleExpense from './SingleExpense';


class ExpenseList extends Component {

  buildList(expenses) {
    return expenses.map((expense) => (<SingleExpense key={expense.node.id} expense={expense.node}/>))
  }

  render() {
    return(
      <>
        {this.buildList(this.props.entries)}
      </>
    )
  }
}

export default ExpenseList
