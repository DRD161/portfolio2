import React from "react"
import { Spring } from "react-spring/renderprops"
import styled from "styled-components"

import Skills from "../About/Skills"

const AboutWrapper = styled.main`
  grid-column: 4 / 16;
  grid-row: 3;
`

const SubText = styled.p`
  font-size: 2rem;
  color: #eeeeee;
`

const EmailLink = styled.a`
  color: #d84358;
  font-weight: 700;
  &:hover {
    color: #eeeeee;
  }
`

export default function AboutSubText() {
  return (
    <AboutWrapper>
      <Spring
        from={{ opacity: 0, transform: "translate3d(0, -15%, 0)" }}
        to={{ opacity: 1, transform: "translate3d(0, 0, 0)" }}
        delay={1400}
        config={{ friction: 50 }}
      >
        {props => (
          <div style={props}>
            <SubText>
              Front End Developer, husband, father & coffee lover.
            </SubText>
            <SubText>
              I specialize in creating user-friendly interfaces using semantic
              markup and JavaScript in order to make the web a better place.
            </SubText>
            <SubText>
              I'm always open to collaborate with great people and solve unique
              challenges. If you're interested <br></br>
              <EmailLink href="mailto:dylan@dylandavenport.com">
                let's get to work!
              </EmailLink>
            </SubText>
            <Skills />
          </div>
        )}
      </Spring>
    </AboutWrapper>
  )
}
