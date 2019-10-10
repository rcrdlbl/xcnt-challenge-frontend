import React, { Component } from 'react'
import styled from 'styled-components'

import ExpenseListContainer from './ExpenseListContainer.js'

const AllExpensesWrapper = styled.div`
  max-width: 30em;
  margin 0 auto;
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
