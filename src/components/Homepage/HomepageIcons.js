import React from 'react'
import { animated } from 'react-spring'
import { Spring } from 'react-spring/renderprops'
import styled from 'styled-components'

import { AiFillGithub, AiOutlineMail, AiFillLinkedin } from 'react-icons/ai'

const IconWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column: 3/5;
  grid-row: 5;
  align-items: center;
  height: 100%;
`

const HomepageIcon = styled(animated.a)`
  color: #eeeeee;
  font-size: 2.5rem;
  display: flex;
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
            <AiFillGithub />
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
            <AiOutlineMail />
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
            <AiFillLinkedin />
          </HomepageIcon>
        )}
      </Spring>
    </IconWrapper>
  )
}
