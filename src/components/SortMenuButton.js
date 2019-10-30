import React from 'react'
import styled from 'styled-components'

const MenuButtonWrapper = styled.div`
  cursor: pointer;
  width: 4em;
  font-size: 1.75em;
  font-weight: bold;
  position: fixed;
  bottom: 10px;
  right: 10px;
  color: #FFF;
  background-color: #FF4F00;
  border-radius: 30px;
  text-align: center;
  padding: 10px;
  float: left;
  display: none;

  @media (max-width: 575px) {
    display: block;
  }
`

const SortMenuButton = (props) => {
  return(
    <MenuButtonWrapper onClick={props.onSortMenuButtonClick}>Sort</MenuButtonWrapper>
  )
}

export default SortMenuButton
