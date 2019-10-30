import React from 'react'
import styled from 'styled-components'

import { Icon } from 'react-icons-kit'
import { arrowSortedDown } from 'react-icons-kit/typicons/arrowSortedDown'
import { arrowSortedUp } from 'react-icons-kit/typicons/arrowSortedUp'
import {arrowBack} from 'react-icons-kit/typicons/arrowBack'

// Styles
const SortWrapper = styled.div`
  top: 0;
  position: sticky;
  padding: 1em;
  flex-wrap: none;

  @media (max-width: 575px) {
  }
`

const SortHeader = styled.h3`
  color: #292929

  @media (max-width: 575px) {
    font-size: 2.5em;
  }
`

const SortButton = styled.div`
  font-weight: bold;
  color: ${props => props.active ? "#FF4F00" : "#767676"};
  margin-bottom: 1em;
  cursor: pointer;

  :hover {
    color: ${props => props.active ? "#FF691A" : "#8F8F8F"}
  }

  @media (max-width: 575px) {
    font-size: 2em;
  }
`

// Allows you to close out of menu on mobile
const HideButton = styled.div`
  font-weight: bold;
  color: #767676;
  margin-bottom: 1em;
  cursor: pointer;
  display: none;

  :hover {
    color: #8F8F8F;
  }

  @media (max-width: 575px) {
    font-size: 2em;
    display: block;
  }
`

const SortTools = (props) => {

  // Arrow icon indicating sort direction
  const arrowIcon = props.sortDirection === "DESC" ? <Icon icon={arrowSortedDown} size="1em"/> : <Icon icon={arrowSortedUp} size="1em" />

  return (
    <SortWrapper>

      <SortHeader>
        Sort + Filter
      </SortHeader>

      <SortButton active={props.sortBy === "Date"} onClick={() => {
          const direction = props.sortDirection === "DESC" && props.sortBy === "Date" ? "ASC" : "DESC"
          props.changeSort("Date", direction)
        }}>
        Date
        {props.sortBy === "Date" ? arrowIcon : ""}
      </SortButton>

      <SortButton active={props.sortBy === "Amount"} onClick={() => {
          const direction = props.sortDirection === "DESC" && props.sortBy === "Amount" ? "ASC" : "DESC"
          props.changeSort("Amount", direction)
        }}>
        Amount
        {props.sortBy === "Amount" ? arrowIcon : ""}
      </SortButton>

      <SortButton active={props.sortBy === "awaitingApproval"} onClick={() => {
          props.changeSort("awaitingApproval", "DESC")
        }}>Awaiting Approval</SortButton>

      <HideButton onClick={() => {
          props.hideMenu()
        }}><Icon icon={arrowBack} size="1em" />Hide</HideButton>

    </SortWrapper>
  )
}

export default SortTools
