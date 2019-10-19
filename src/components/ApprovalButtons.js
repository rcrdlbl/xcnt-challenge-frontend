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
`

const DeclineButton = styled.button`
  background-color: ${props => props.theme.darkRed};
  color: ${props => props.theme.white};
  width: 50%;
  color: white;
  font-size: 1.05rem;
  font-weight: bold;
  border: none;
`

const ApprovalButtons = (props) => {
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
