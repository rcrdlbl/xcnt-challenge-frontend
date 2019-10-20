import React from 'react';
import styled from 'styled-components'

const ButtonGroup = styled.div`
  width: 100%;
`

const ApproveButton = styled.button`
  background-color: ${props => props.theme.lightGreen};
  color: ${props => props.theme.white};
  width: 50%;
  font-size: 1.05rem;
  font-weight: bold;
  border: none;
  padding: 0.25em;
`

const DeclineButton = styled.button`
  background-color: ${props => props.theme.darkRed};
  color: ${props => props.theme.white};
  width: 50%;
  color: white;
  font-size: 1.05rem;
  font-weight: bold;
  border: none;
  padding: 0.25em;
`

const UndoButton = styled.button`
  background-color: ${props => props.theme.baseBackground};
  color: ${props => props.theme.baseFontColor};
  border: none;
  border-top: 1px solid ${props => props.theme.baseFontColor};
  width: 100%;
  font-size: 1.05rem;
  font-weight: bold;
  padding: 0.25em;
  transition: 1s all ease-in-out;
`

const ApprovalButtons = (props) => {
  if (props.approved !== null) {
    return (
      <ButtonGroup>
        <UndoButton onClick={e => {
            e.preventDefault()
            props.updateApproved({variables: {approved: !props.approved, id: props.id}})
          }}>{props.approved ? "Decline" : "Approve"}
        </UndoButton>
      </ButtonGroup>
    )
  }

  return (
    <ButtonGroup>
      <DeclineButton onClick={e => {
          e.preventDefault()
          props.updateApproved({ variables: { approved: false, id: props.id } })
        }}>Decline</DeclineButton>
      <ApproveButton onClick={e => {
          e.preventDefault()
          props.updateApproved({ variables: { approved: true, id: props.id } })
        }}>Approve</ApproveButton>
    </ButtonGroup>
  )
}

export default ApprovalButtons
