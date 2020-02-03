import React from "react"
import { animated, config } from "react-spring"
import { Spring } from "react-spring/renderprops"
import styled from "styled-components"

const Wrapper = styled.div`
  grid-column: 3/12;
  grid-row: 5;
`

const SubHeader = styled(animated.p)`
  font-size: 1.7rem;
  color: #959595;
  font-style: italic;
  margin-bottom: 0;
`

export default function HomeSubText() {
  return (
    <Wrapper className="home-text-wrapper">
      <Spring
        from={{
          opacity: 0,
        }}
        to={{
          opacity: 1,
        }}
        config={{ delay: 1600 }}
      >
        {props => (
          <SubHeader className="home-subtext" style={props}>
            I’m a Front End Developer & UX enthusiast specializing in using
            JavaScript
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
        config={{ delay: 1650 }}
      >
        {props => (
          <SubHeader className="home-subtext" style={props}>
            to create dynamic data driven content for the web.
          </SubHeader>
        )}
      </Spring>
    </Wrapper>
  )
}
