import React from "react"
import { animated, config } from "react-spring"
import { Spring } from "react-spring/renderprops"
import styled from "styled-components"

const Wrapper = styled.div`
  position: relative;
`

const AboutHeaderText = styled(animated.h3)`
  font-size: 6rem;
  color: #eeeeee;
  position: relative;
  left: 10%;
`

const RedBar = styled(animated.div)`
  width: 15px;
  background: #d84358;
  position: absolute;
  top: 16%;
  right: 90%;
  height: 70%;
  margin-right: 5px;
`

export default function AboutHeader() {
  return (
    <Wrapper>
      <Spring
        from={{ opacity: 0, transform: "translate3d(0,-40%, 0)" }}
        to={{ opacity: 1, transform: "translate3d(0, 0, 0)" }}
        config={{ delay: 400 }}
      >
        {props => <RedBar className="bar" style={props} />}
      </Spring>
      <Spring
        from={{ opacity: 0, transform: "translate3d(-2%, 0, 0)" }}
        to={{ opacity: 1, transform: "translate3d(0, 0, 0)" }}
        config={{ delay: 800 }}
      >
        {props => (
          <AboutHeaderText className="about-header" style={props}>
            about
          </AboutHeaderText>
        )}
      </Spring>
    </Wrapper>
  )
}
