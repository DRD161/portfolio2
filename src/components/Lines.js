import React from "react"
import styled from "styled-components"

const Line = styled.div`
  position: absolute;
  left: 2.5%;
  bottom: 0;
  width: 1px;
  height: 100%;
  background-color: #eeeeee;
  opacity: 8%;
  &:nth-child(1) {
    left: 17.5%;
  }
  &:nth-child(2) {
    left: 32.5%;
  }
  &:nth-child(3) {
    left: 47.5%;
  }
  &:nth-child(4) {
    left: 62.5%;
  }
  &:nth-child(5) {
    left: 77.5%;
  }
  &:nth-child(6) {
    left: 92.5%;
  }
`

const Lines = () => (
  <div>
    <Line />
    <Line />
    <Line />
    <Line />
    <Line />
    <Line />
    <Line />
  </div>
)
export default Lines
