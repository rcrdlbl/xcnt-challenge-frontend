import React, { Component } from 'react'
import styled from 'styled-components'

import ExpenseListContainer from './ExpenseListContainer.js'

const AllExpensesWrapper = styled.div`
`

class AllExpenses extends Component {
  render() {
    return(
      <AllExpensesWrapper>
        <ExpenseListContainer />
      </AllExpensesWrapper>
    )
  }
}

export default AllExpenses
