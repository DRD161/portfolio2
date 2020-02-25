import React from "react"
import { animated } from "react-spring"
import { Spring } from "react-spring/renderprops"
import styled from "styled-components"

const Wrapper = styled.div`
  display: grid;
  grid-column: 2 / 5;
  align-items: center;
`

const AboutHeaderText = styled(animated.h3)`
  grid-column: 3;
  font-size: 6rem;
  color: #eeeeee;
`

const RedBar = styled(animated.div)`
  width: 10px;
  height: 80%;
  background: #d84358;
`

export default function AboutHeader() {
  return (
    <Wrapper>
      <Spring
        from={{ opacity: 0, transform: "translate3d(0,-40%, 0)" }}
        to={{ opacity: 1, transform: "translate3d(0, 0, 0)" }}
        config={{ friction: 50 }}
      >
        {props => <RedBar style={props} />}
      </Spring>
      <Spring
        from={{ opacity: 0, transform: "translate3d(-20%, 0, 0)" }}
        to={{ opacity: 1, transform: "translate3d(0, 0, 0)" }}
        config={{ delay: 1000, friction: 50 }}
      >
        {props => <AboutHeaderText style={props}>about</AboutHeaderText>}
      </Spring>
    </Wrapper>
  )
}
