import React, { Component } from "react";
import styled from "styled-components";

import SortMenuButton from "../components/SortMenuButton";
import ExpenseListContainer from "./ExpenseListContainer";
import SortTools from "../components/SortTools";

// Styles
const AllExpensesWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const MainContent = styled.div`
  max-width: 30em;
`;

const SortWrapper = styled.div`
  top: 0;
  position: sticky;
  margin-right: 1.5em;

  @media (max-width: 575px) {
    position: fixed;
    height: 100vh;
    width: 100vw;
    transform: ${props =>
      props.menuVisibility
        ? "translate3d(0vw, 0, 0)"
        : "translate3d(-100vw, 0, 0)"};
    transition: transform 0.3s cubic-bezier(0, 0.52, 0, 1);
    background-color: #f5f5f5;
  }
`;

class AllExpenses extends Component {
  constructor() {
    super();
    this.state = {
      sortBy: "Date",
      sortDirection: "DESC",
      menuVisibility: false
    };
  }

  // Changes sorting order
  changeSort = (attribute, direction) => {
    this.setState({
      sortBy: attribute,
      sortDirection: direction,
      menuVisibility: false
    });
    window.scrollTo(0, 0);
  };

  // Mobile Menu Controls
  onSortMenuButtonClick = () => {
    this.setState({
      menuVisibility: true
    });
  };

  hideMenu = () => {
    this.setState({
      menuVisibility: false
    });
  };

  render() {
    const {
      menuVisibility,
      sortBy,
      onSortMenuButtonClick,
      sortDirection
    } = this.state;
    return (
      <>
        <SortMenuButton onSortMenuButtonClick={onSortMenuButtonClick} />
        <AllExpensesWrapper>
          <SortWrapper menuVisibility={menuVisibility}>
            <SortTools
              hideMenu={this.hideMenu}
              changeSort={this.changeSort}
              sortBy={sortBy}
              sortDirection={sortDirection}
            />
          </SortWrapper>
          <MainContent>
            <ExpenseListContainer
              sortBy={sortBy}
              sortDirection={sortDirection}
            />
          </MainContent>
        </AllExpensesWrapper>
      </>
    );
  }
}

export default AllExpenses;
