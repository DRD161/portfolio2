import React from 'react'
import { animated } from 'react-spring'
import { Spring } from 'react-spring/renderprops'
import styled from 'styled-components'

import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const IconWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column: 2/4;
  grid-row: 3;
  align-items: center;
  margin-top: 25%;
`

const HomepageIcon = styled(animated.a)`
  color: #eeeeee;
  font-size: 2.3rem;
  display: flex;
  width: 50%;
  &:hover {
    color: #ff8a00;
  }
`

export default function HomepageIcons() {
  return (
    <IconWrapper>
      <Spring
        from={{
          opacity: 0,
          transform: 'translate3d(-5%, 0, 0)',
        }}
        to={{
          opacity: 1,
          transform: 'translate3d(0, 0, 0)',
        }}
        config={{ delay: 1600, friction: 50 }}
      >
        {props => (
          <HomepageIcon href="https://github.com/DRD161" style={props}>
            <FaGithub />
          </HomepageIcon>
        )}
      </Spring>
      <Spring
        from={{
          opacity: 0,
          transform: 'translate3d(-5%, 0, 0)',
        }}
        to={{
          opacity: 1,
          transform: 'translate3d(0, 0, 0)',
        }}
        config={{ delay: 1700, friction: 50 }}
      >
        {props => (
          <HomepageIcon href="mailto:dylan@dylandavenport.com" style={props}>
            <FaLinkedin />
          </HomepageIcon>
        )}
      </Spring>
      <Spring
        from={{
          opacity: 0,
          transform: 'translate3d(-5%, 0, 0)',
        }}
        to={{
          opacity: 1,
          transform: 'translate3d(0, 0, 0)',
        }}
        config={{ delay: 1800, friction: 50 }}
      >
        {props => (
          <HomepageIcon
            href="https://www.linkedin.com/in/dylandavenport/"
            style={props}
          >
            <FaEnvelope />
          </HomepageIcon>
        )}
      </Spring>
    </IconWrapper>
  )
}
