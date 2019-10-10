import React from 'react'

const SingleExpense = (props) => {
  return(
    <div>
      <p>
        {props.expense.employee.firstName} {props.expense.employee.lastName}
      </p>
      <p>
        {props.expense.amount} {props.expense.currency}
      </p>
      <p>{props.expense.description}</p>
    </div>
  )
}

export default SingleExpense
