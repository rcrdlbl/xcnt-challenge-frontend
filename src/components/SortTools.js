import React from "react";
import styled from "styled-components";

import { Icon } from "react-icons-kit";
import { arrowSortedDown } from "react-icons-kit/typicons/arrowSortedDown";
import { arrowSortedUp } from "react-icons-kit/typicons/arrowSortedUp";
import { arrowBack } from "react-icons-kit/typicons/arrowBack";

// Styles
const SortWrapper = styled.div`
  top: 0;
  position: sticky;
  padding: 1em;
  flex-wrap: none;

  @media (max-width: 575px) {
  }
`;

const SortHeader = styled.h3`
  color: #292929 @media (max-width: 575px) {
    font-size: 2.5em;
  }
`;

const SortButton = styled.div`
  font-weight: bold;
  color: ${props => (props.active ? "#FF4F00" : "#767676")};
  margin-bottom: 1em;
  cursor: pointer;

  :hover {
    color: ${props => (props.active ? "#FF691A" : "#8F8F8F")};
  }

  @media (max-width: 575px) {
    font-size: 2em;
  }
`;

// Allows you to close out of menu on mobile
const HideButton = styled.div`
  font-weight: bold;
  color: #767676;
  margin-bottom: 1em;
  cursor: pointer;
  display: none;

  :hover {
    color: #8f8f8f;
  }

  @media (max-width: 575px) {
    font-size: 2em;
    display: block;
  }
`;

const SortTools = ({ sortDirection, sortBy, changeSort, hideMenu }) => {
  // Arrow icon indicating sort direction
  const arrowIcon =
    sortDirection === "DESC" ? (
      <Icon icon={arrowSortedDown} size="1em" />
    ) : (
      <Icon icon={arrowSortedUp} size="1em" />
    );

  return (
    <SortWrapper>
      <SortHeader>Sort + Filter</SortHeader>

      <SortButton
        active={sortBy === "Date"}
        onClick={() => {
          const direction =
            sortDirection === "DESC" && sortBy === "Date" ? "ASC" : "DESC";
          changeSort("Date", direction);
        }}
      >
        Date
        {sortBy === "Date" ? arrowIcon : ""}
      </SortButton>

      <SortButton
        active={sortBy === "Amount"}
        onClick={() => {
          const direction =
            sortDirection === "DESC" && sortBy === "Amount" ? "ASC" : "DESC";
          changeSort("Amount", direction);
        }}
      >
        Amount
        {sortBy === "Amount" ? arrowIcon : ""}
      </SortButton>

      <SortButton
        active={sortBy === "awaitingApproval"}
        onClick={() => {
          changeSort("awaitingApproval", "DESC");
        }}
      >
        Awaiting Approval
      </SortButton>

      <HideButton
        onClick={() => {
          hideMenu();
        }}
      >
        <Icon icon={arrowBack} size="1em" />
        Hide
      </HideButton>
    </SortWrapper>
  );
};

export default SortTools;
