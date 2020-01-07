import React from "react"
import styled from "styled-components"

const HomeHeaderText = styled.h1`
  font-size: 9rem;
  text-transform: uppercase;
  color: #eeeeee;
  position: relative;
`

const RedBar = styled.div`
  width: 15px;
  background: #d84358;
  position: absolute;
  top: 10.2%;
  height: 82.6%;
  right: 100%;
`

const HomeHeader = () => (
  <HomeHeaderText>
    <RedBar />
    hello.
    <br /> my name is dylan
  </HomeHeaderText>
)

export default HomeHeader
