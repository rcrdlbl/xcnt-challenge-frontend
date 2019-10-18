import React from 'react';
import styled from 'styled-components'

const ButtonGroup = styled.div`
  width: 100%;
`

const ApproveButton = styled.button`
  background-color: #0A840A;
  width: 50%;
  color: white;
  font-size: 1.2rem;
  border: none;
`

const DeclineButton = styled.button`
  background-color: #900000;
  width: 50%;
  color: white;
  font-size: 1.2rem;
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
