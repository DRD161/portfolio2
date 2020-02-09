import React from "react"
import { Spring } from "react-spring/renderprops"
import styled from "styled-components"

const Wrapper = styled.div`
  display: grid;
  grid-column: 2 / 6;
  align-items: center;
`

const PortfolioHeaderText = styled.h3`
  grid-column: 2;
  font-size: 6rem;
  color: #eeeeee;
`

const RedBar = styled.div`
  width: 10px;
  background: #d84358;
  height: 70%;
`

export default function PortfolioHeader() {
  return (
    <Wrapper>
      <Spring
        from={{ opacity: 0, transform: "translate3d(0,-40%, 0)" }}
        to={{ opacity: 1, transform: "translate3d(0, 0, 0)" }}
        config={{ friction: 50 }}
      >
        {props => <RedBar className="bar" style={props} />}
      </Spring>
      <Spring
        from={{
          opacity: 0,
          transform: "translate3d(-5%, 0, 0)",
        }}
        to={{
          opacity: 1,
          transform: "translate3d(0, 0, 0)",
        }}
        config={{ delay: 1000, friction: 50 }}
      >
        {props => (
          <PortfolioHeaderText style={props}>portfolio</PortfolioHeaderText>
        )}
      </Spring>
    </Wrapper>
  )
}
