import React from "react"
import styled from "styled-components"

const SubHeader = styled.p`
  font-size: 2.7rem;
  width: 50%;
  position: absolute;
  color: #eeeeee;
  bottom: 15%;
  left: 5%;
  z-index: 1;
`

const HomeSubText = () => (
  <SubHeader>
    I’m a Front End Developer & UX enthusiast with a passion for using
    JavaScript to create all things web.
  </SubHeader>
)

export default HomeSubText
