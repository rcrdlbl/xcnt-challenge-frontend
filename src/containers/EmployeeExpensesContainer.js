import React, { useState } from "react";
import styled from "styled-components";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

import ExpenseListContainer from "./ExpenseListContainer";
import SortTools from "../components/SortTools";
import SortMenuButton from "../components/SortMenuButton";

// Styles

const EmployeeExpenseListWrapper = styled.div`
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

const EmployeeName = styled.div`
  margin: 1.2rem;
  color: #292929;
  font-weight: bold;
  font-size: 2rem;
`;

// Query

const GET_EMPLOYEE = gql`
  query Employee($id: ID!) {
    employee(id: $id) {
      firstName
      lastName
    }
  }
`;

function EmployeeExpensesContainer(props) {
  // Set Sorting

  const [sortBy, setSortBy] = useState("Date");
  const [sortDirection, setSortDirection] = useState("DESC");
  const [menuVisibility, setMenuVisibility] = useState(false);

  const changeSort = (attribute, direction) => {
    setSortBy(attribute);
    setSortDirection(direction);
    setMenuVisibility(false);
    window.scrollTo(0, 0);
  };

  // Menu controls for mobile

  const onSortMenuButtonClick = () => {
    setMenuVisibility(true);
  };

  const hideMenu = () => {
    setMenuVisibility(false);
  };

  // Load Employee Name

  const { loading, error, data } = useQuery(GET_EMPLOYEE, {
    variables: { id: props.match.params.id }
  });

  if (loading) return <h1>Loading</h1>;
  if (error) return <h1>Error</h1>;

  return (
    <>
      <SortMenuButton onSortMenuButtonClick={onSortMenuButtonClick} />
      <EmployeeExpenseListWrapper>
        <SortWrapper menuVisibility={menuVisibility}>
          <SortTools
            hideMenu={hideMenu}
            changeSort={changeSort}
            sortBy={sortBy}
            sortDirection={sortDirection}
          />
        </SortWrapper>
        <MainContent>
          <EmployeeName>
            {data.employee.firstName} {data.employee.lastName}
          </EmployeeName>
          <ExpenseListContainer
            employee
            id={props.match.params.id}
            sortBy={sortBy}
            sortDirection={sortDirection}
          />
        </MainContent>
      </EmployeeExpenseListWrapper>
    </>
  );
}

export default EmployeeExpensesContainer;
