import React from "react"
import styled from "styled-components"

const HeaderText = styled.h1`
  font-size: 9.5rem;
  text-transform: uppercase;
  color: #eeeeee;
  position: relative;
`

const RedBar = styled.div`
  width: 25px;
  background: #d84358;
  position: absolute;
  top: 10.2%;
  height: 82.6%;
  right: 100%;
`

const HomeHeader = () => (
  <div>
    <HeaderText>
      <RedBar />
      hello.
      <br /> my name is dylan
    </HeaderText>
  </div>
)

export default HomeHeader
