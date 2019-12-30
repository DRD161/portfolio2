import React from "react"
import styled from "styled-components"

const HeaderText = styled.h1`
  font-size: 9.5rem;
  text-transform: uppercase;
  color: #eeeeee;
  position: absolute;
  left: 5%;
  top: 25%;
  margin: auto;
  z-index: 1;
`

const AboutHeader = () => <HeaderText>who i am</HeaderText>

export default AboutHeader
