import React from 'react';
import styled from 'styled-components'

import { Icon } from 'react-icons-kit'
import {arrowBack} from 'react-icons-kit/typicons/arrowBack'
import {tick} from 'react-icons-kit/typicons/tick'
import {cross} from 'react-icons-kit/entypo/cross'

// Styles
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

  :focus {
    outline: 0
  }
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

  :focus {
    outline: 0
  }
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

  :focus {
    outline: 0
  }
`

const ApprovalButtons = (props) => {
  // Displays 2 buttons if not approved yet, otherwise will display a button to revert changes

  if (props.approved !== null) {
    return (
      <ButtonGroup>
        <UndoButton onClick={e => {
            e.preventDefault()
            props.updateApproved({variables: {approved: !props.approved, id: props.id}})
          }}>{props.approved ? "Decline" : "Approve"}
          <Icon icon={arrowBack} />
        </UndoButton>
      </ButtonGroup>
    )
  }

  return (
    <ButtonGroup>
      <DeclineButton onClick={e => {
          e.preventDefault()
          props.updateApproved({ variables: { approved: false, id: props.id } })
        }}>Decline <Icon icon={cross} /></DeclineButton>
      <ApproveButton onClick={e => {
          e.preventDefault()
          props.updateApproved({ variables: { approved: true, id: props.id } })
        }}>Approve <Icon icon={tick} /></ApproveButton>
    </ButtonGroup>
  )
}

export default ApprovalButtons
