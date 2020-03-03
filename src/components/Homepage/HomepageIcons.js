import React from "react"
import { animated } from "react-spring"
import { Spring } from "react-spring/renderprops"
import styled from "styled-components"

import { AiOutlineMail, AiOutlineLinkedin } from "react-icons/ai"
import { DiGithubAlt } from "react-icons/di"

const IconWrapper = styled.div`
  grid-column: 15;
  grid-row: 5;
  align-self: center;
  height: 100%;
  @media screen and (max-width: 768px) {
    grid-column: 14/16;
  }
`

const HomepageIcon = styled(animated.a)`
  color: #eeeeee;
  font-size: 2rem;
  &:hover {
    color: #d84358;
  }
`

export default function HomepageIcons() {
  return (
    <IconWrapper>
      <Spring
        from={{
          opacity: 0,
          transform: "translate3d(-5%, 0, 0)",
        }}
        to={{
          opacity: 1,
          transform: "translate3d(0, 0, 0)",
        }}
        config={{ delay: 1600, friction: 50 }}
      >
        {props => (
          <HomepageIcon href="mailto:dylan@dylandavenport.com" style={props}>
            <AiOutlineMail />
          </HomepageIcon>
        )}
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
        config={{ delay: 1700, friction: 50 }}
      >
        {props => (
          <HomepageIcon
            href="https://www.linkedin.com/in/dylandavenport/"
            style={props}
          >
            <AiOutlineLinkedin />
          </HomepageIcon>
        )}
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
        config={{ delay: 1800, friction: 50 }}
      >
        {props => (
          <HomepageIcon href="https://github.com/DRD161" style={props}>
            <DiGithubAlt />
          </HomepageIcon>
        )}
      </Spring>
    </IconWrapper>
  )
}
