import React from 'react'
import { animated } from 'react-spring'
import { Spring } from 'react-spring/renderprops'
import styled from 'styled-components'

const Wrapper = styled.div`
  grid-column: 3 / 16;
  grid-row: 3;
  @media screen and (max-width: 768px) {
    grid-column: 3 / 17;
    grid-row: 3;
  }
`

const HomeHeaderText = styled(animated.h1)`
  font-size: 9rem;
  color: #eeeeee;
  @media screen and (max-width: 1440px) {
    font-size: 7.8rem;
  }
  @media screen and (max-width: 768px) {
    font-size: 7rem;
  }
`

const boldHeader = {
  fontWeight: '400',
}

const orangeHeader = {
  color: '#FF8A00',
}

export default function HomeHeader() {
  return (
    <>
      <Wrapper>
        <Spring
          from={{
            opacity: 0,
            transform: 'translate3d(-5%, 0, 0)',
          }}
          to={{
            opacity: 1,
            transform: 'translate3d(0, 0, 0)',
          }}
          config={{ delay: 1000, friction: 50 }}
        >
          {props => (
            <HomeHeaderText style={props}>
              Hello! <span style={boldHeader}>My name</span>
            </HomeHeaderText>
          )}
        </Spring>
        <Spring
          from={{ opacity: 0, transform: 'translate3d(-5%, 0, 0)' }}
          to={{ opacity: 1, transform: 'translate3d(0, 0, 0)' }}
          config={{ delay: 1100, friction: 50 }}
        >
          {props => (
            <HomeHeaderText style={props}>
              is <span style={{ ...orangeHeader, ...boldHeader }}>Dylan</span>
            </HomeHeaderText>
          )}
        </Spring>
      </Wrapper>
    </>
  )
}
