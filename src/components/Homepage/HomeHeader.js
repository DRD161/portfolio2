import React from "react"
import styled from "styled-components"

const HeaderText = styled.h1`
  font-size: 9.5rem;
  text-transform: uppercase;
  color: #eeeeee;
  position: absolute;
  left: 6%;
  top: 25%;
  margin: auto;
  z-index: 1;
`

const HomeHeader = () => (
  <HeaderText>
    hello.
    <br /> my name is dylan
  </HeaderText>
)

export default HomeHeader
