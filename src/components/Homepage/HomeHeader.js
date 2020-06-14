import React from 'react'
import { animated } from 'react-spring'
import { Spring } from 'react-spring/renderprops'
import styled from 'styled-components'
import HomeSubText from '../Homepage/HomeSubText'
import HomepageIcons from '../Homepage/HomepageIcons'

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(18, minmax(80px, 1fr));
  grid-auto-rows: minmax(80px, 200px);
  grid-column: 3 / 16;
  grid-row: 2;
`

const HomeHeaderText = styled(animated.h1)`
  font-size: 9rem;
  color: #eeeeee;
  grid-column: 2/6;
`

const BoldHeader1 = styled.h1`
  font-weight: 400;
  font-size: 9rem;
  color: #eeeeee;
  grid-column: 6/13;
`

const BoldHeader2 = styled.h1`
  font-weight: 400;
  font-size: 9rem;
  color: #eeeeee;
  grid-column: 2/4;
  grid-row: 2;
`

const OrangeHeader = styled.h1`
  color: #ff8a00;
  font-size: 9rem;
  font-weight: 400;
  grid-row: 2;
  grid-column: 4/8;
  margin-left: -7%;
`

const TopCurlyBrace = styled.p`
  color: #ff8a00;
  font-size: 8rem;
  font-family: 'Oswald', 'sans-serif';
  grid-column: 1;
  grid-row: 1;
  margin: -30% 0;
`

const BottomCurlyBrace = styled.p`
  color: #ff8a00;
  font-size: 8rem;
  font-family: 'Oswald', 'sans-serif';
  grid-column: 11;
  grid-row: 3;
  margin: -70% auto 0;
`

export default function HomeHeader() {
  return (
    <Wrapper>
      <Spring
        from={{ opacity: 0, transform: 'translate3d(0, -40%, 0)' }}
        to={{ opacity: 1, transform: 'translate3d(0, 0, 0)' }}
        config={{ friction: 50 }}
      >
        {props => <TopCurlyBrace style={props}>&#123;</TopCurlyBrace>}
      </Spring>
      <Spring
        from={{ opacity: 0, transform: 'translate3d(-5%, 0, 0)' }}
        to={{ opacity: 1, transform: 'translate3d(0, 0, 0)' }}
        config={{ delay: 1000, friction: 50 }}
      >
        {props => <HomeHeaderText style={props}>Hello!</HomeHeaderText>}
      </Spring>
      <Spring
        from={{ opacity: 0, transform: 'translate3d(-5%, 0, 0)' }}
        to={{ opacity: 1, transform: 'translate3d(0, 0, 0)' }}
        config={{ delay: 1000, friction: 50 }}
      >
        {props => <BoldHeader1 style={props}>My name</BoldHeader1>}
      </Spring>
      <Spring
        from={{ opacity: 0, transform: 'translate3d(-5%, 0, 0)' }}
        to={{ opacity: 1, transform: 'translate3d(0, 0, 0)' }}
        config={{ delay: 1100, friction: 50 }}
      >
        {props => <BoldHeader2 style={props}>is</BoldHeader2>}
      </Spring>
      <Spring
        from={{ opacity: 0, transform: 'translate3d(-5%, 0, 0)' }}
        to={{ opacity: 1, transform: 'translate3d(0, 0, 0)' }}
        config={{ delay: 1100, friction: 50 }}
      >
        {props => <OrangeHeader style={props}>Dylan</OrangeHeader>}
      </Spring>
      <HomeSubText />
      <HomepageIcons />
      <Spring
        from={{ opacity: 0, transform: 'translate3d(0, 20%, 0)' }}
        to={{ opacity: 1, transform: 'translate3d(0, 0, 0)' }}
        config={{ friction: 50 }}
      >
        {props => <BottomCurlyBrace style={props}>&#125;</BottomCurlyBrace>}
      </Spring>
    </Wrapper>
  )
}
