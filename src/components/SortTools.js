import React from 'react'
import styled from 'styled-components'

import { Icon } from 'react-icons-kit'
import { arrowSortedDown } from 'react-icons-kit/typicons/arrowSortedDown'
import { arrowSortedUp } from 'react-icons-kit/typicons/arrowSortedUp'



const SortWrapper = styled.div`
  top: 0;
  position: sticky;
  padding: 1em;
`

const SortHeader = styled.h3`
  color: #292929
`

const SortButton = styled.div`
  font-weight: bold;
  color: ${props => props.active ? "#FF4F00" : "#767676"};
  margin-bottom: 1em;
  cursor: pointer;

  :hover {
    color: ${props => props.active ? "#FF691A" : "#8F8F8F"}
  }
`

const SortTools = (props) => {

  const arrowIcon = props.sortDirection === "DESC" ? <Icon icon={arrowSortedDown} /> : <Icon icon={arrowSortedUp} />

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

    </SortWrapper>
  )
}

export default SortTools
