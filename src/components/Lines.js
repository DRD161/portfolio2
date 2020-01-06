import React from "react"
import styled from "styled-components"

const Line = styled.div`
  position: absolute;
  left: 5%;
  bottom: 0;
  width: 1px;
  height: 100%;
  background-color: #eeeeee;
  opacity: 7%;
  &:nth-child(1) {
    left: 20%;
  }
  &:nth-child(2) {
    left: 35%;
  }
  &:nth-child(3) {
    left: 50%;
  }
  &:nth-child(4) {
    left: 65%;
  }
  &:nth-child(5) {
    left: 80%;
  }
  &:nth-child(6) {
    left: 95%;
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
