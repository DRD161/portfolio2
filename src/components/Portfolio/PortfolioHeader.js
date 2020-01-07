import React from "react"
import styled from "styled-components"

const PortfolioHeaderText = styled.h3`
  font-size: 6rem;
  color: #eeeeee;
  position: relative;
  left: 10%;
`

const RedBar = styled.div`
  width: 15px;
  background: #d84358;
  position: absolute;
  top: 16%;
  right: 100%;
  height: 88%;
  margin-right: 5px;
`

const PortfolioHeader = () => (
  <PortfolioHeaderText>
    <RedBar />
    portfolio
  </PortfolioHeaderText>
)

export default PortfolioHeader
