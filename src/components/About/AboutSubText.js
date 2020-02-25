import React from "react"
import { Link } from "gatsby"
import { Spring } from "react-spring/renderprops"
import styled from "styled-components"

import Skills from "../About/Skills"

const AboutTextWrapper = styled.main`
  grid-column: 4 / 16;
  grid-row: 3;
`

const SubText = styled.p`
  font-size: 2rem;
  color: #eeeeee;
`

const ContactLink = styled(props => <Link {...props} />)`
  color: #d84358;
  font-weight: 700;
  &:hover {
    color: #eeeeee;
  }
`

export default function AboutSubText() {
  return (
    <AboutTextWrapper>
      <Spring
        from={{ opacity: 0, transform: "translate3d(0, -15%, 0)" }}
        to={{ opacity: 1, transform: "translate3d(0, 0, 0)" }}
        delay={1600}
      >
        {props => (
          <>
            <SubText style={props}>
              Front End Developer, husband, father & coffee lover.
            </SubText>
            <Spring
              from={{ opacity: 0, transform: "translate3d(0, -15%, 0)" }}
              to={{ opacity: 1, transform: "translate3d(0, 0, 0)" }}
              delay={1650}
            >
              {props => (
                <SubText style={props}>
                  I specialize in creating user-friendly interfaces using
                  semantic markup and JavaScript in order to make the web a
                  better place.
                </SubText>
              )}
            </Spring>
            <Spring
              from={{ opacity: 0, transform: "translate3d(0, -15%, 0)" }}
              to={{ opacity: 1, transform: "translate3d(0, 0, 0)" }}
              delay={1700}
            >
              {props => (
                <SubText style={props}>
                  I'm always open to collaborate with great people and solve
                  unique challenges. If you're interested{" "}
                  <ContactLink to="/contact">get in touch!</ContactLink>
                </SubText>
              )}
            </Spring>
            <Skills />
          </>
        )}
      </Spring>
    </AboutTextWrapper>
  )
}
