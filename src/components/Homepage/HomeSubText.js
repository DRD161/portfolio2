import React from 'react'
import { animated } from 'react-spring'
import { Spring } from 'react-spring/renderprops'
import styled from 'styled-components'

const Wrapper = styled.div`
  grid-column: 2/13;
  grid-row: 3;
  @media screen and (max-width: 768px) {
    grid-column: 3/17;
  }
`

const SubHeader = styled(animated.p)`
  font-size: 1.7rem;
  color: #eeeeee;
  font-style: italic;
  margin-bottom: 0;
  @media screen and (max-width: 1440px) {
    font-size: 1.6rem;
  }
  @media screen and (max-width: 768px) {
    font-size: 1.3rem;
  }
`

export default function HomeSubText() {
  return (
    <Wrapper>
      <Spring
        from={{
          opacity: 0,
        }}
        to={{
          opacity: 1,
        }}
        delay={1600}
      >
        {props => (
          <SubHeader style={props}>
            I’m a Front End Developer & UX enthusiast specializing in using
          </SubHeader>
        )}
      </Spring>
      <Spring
        from={{
          opacity: 0,
        }}
        to={{
          opacity: 1,
        }}
        delay={1650}
      >
        {props => (
          <SubHeader style={props}>
            JavaScript to create dynamic data driven content for the web.
          </SubHeader>
        )}
      </Spring>
    </Wrapper>
  )
}
