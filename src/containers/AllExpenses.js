import React, { Component } from 'react'
import styled from 'styled-components'

import ExpenseListContainer from './ExpenseListContainer.js'
import SortTools from '../components/SortTools'

const AllExpensesWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const MainContent = styled.div`
  max-width: 30em;
`

const SortWrapper = styled.div`
  top: 0;
  position: sticky;
  margin-right: 1.5em;
`


class AllExpenses extends Component {
  state = {
    sortBy: "Date",
    sortDirection: "DESC"
  }

  changeSort = (attribute, direction) => {
    this.setState({
      sortBy: attribute,
      sortDirection: direction
    })
    window.scrollTo(0,0)
  }

  render() {
    return(
        <AllExpensesWrapper>
          <SortWrapper>
            <SortTools changeSort={this.changeSort} sortBy={this.state.sortBy} sortDirection={this.state.sortDirection}/>
          </SortWrapper>
          <MainContent>
            <ExpenseListContainer sortBy={this.state.sortBy} sortDirection={this.state.sortDirection} />
          </MainContent>
        </ AllExpensesWrapper>
    )
  }
}

export default AllExpenses
