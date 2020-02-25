import React from "react"
import { animated } from "react-spring"
import { Spring } from "react-spring/renderprops"
import styled from "styled-components"

const Wrapper = styled.div`
  grid-column: 3 / 16;
  grid-row: 4;
`

const HomeHeaderText = styled(animated.h1)`
  font-size: 9rem;
  text-transform: uppercase;
  color: #eeeeee;
`

const RedBar = styled(animated.div)`
  width: 10px;
  background: #d84358;
  grid-column: 2;
  grid-row: 4;
  height: 90%;
  margin: auto;
`

export default function HomeHeader() {
  return (
    <>
      <Spring
        from={{ opacity: 0, transform: "translate3d(0,-40%, 0)" }}
        to={{ opacity: 1, transform: "translate3d(0, 0, 0)" }}
        config={{ friction: 50 }}
      >
        {props => <RedBar style={props} />}
      </Spring>
      <Wrapper>
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
          {props => <HomeHeaderText style={props}>hello.</HomeHeaderText>}
        </Spring>
        <Spring
          from={{ opacity: 0, transform: "translate3d(-5%, 0, 0)" }}
          to={{ opacity: 1, transform: "translate3d(0, 0, 0)" }}
          config={{ delay: 1100, friction: 50 }}
        >
          {props => (
            <HomeHeaderText style={props}>my name is dylan</HomeHeaderText>
          )}
        </Spring>
      </Wrapper>
    </>
  )
}
