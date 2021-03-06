import React from "react"
import { Spring } from "react-spring/renderprops"
import styled from "styled-components"

const ContactTextWrapper = styled.main`
  grid-column: 4 / 16;
  grid-row: 3;
`

const SubText = styled.p`
  font-size: 2rem;
  color: #eeeeee;
  grid-column: 4 / 16;
  grid-row: 3;
`

const ContactLink = styled.a`
  display: inline-block;
  color: #d84358;
  font-size: 2rem;
  &:hover {
    color: #eeeeee;
  }
`

const LinkGroup = styled.a`
  grid-column: 4 /11;
  grid-row: 4;
`

export default function ContactSubText() {
  return (
    <>
      <ContactTextWrapper>
        <Spring
          from={{ opacity: 0, transform: "translate3d(0, -15%, 0)" }}
          to={{ opacity: 1, transform: "translate3d(0, 0, 0)" }}
          delay={1600}
        >
          {props => (
            <>
              <SubText style={props}>
                Whether you’re looking to collaborate on a project, grab a
                coffee or simply just want to say hi. {}Get in touch!
              </SubText>
            </>
          )}
        </Spring>
        <Spring
          from={{ opacity: 0, transform: "translate3d(0, -15%, 0)" }}
          to={{ opacity: 1, transform: "translate3d(0, 0, 0)" }}
          delay={1650}
        >
          {props => (
            <>
              <SubText style={props}>
                I’m always looking for interesting and creative people to work
                with!
              </SubText>
            </>
          )}
        </Spring>
      </ContactTextWrapper>
      <LinkGroup>
        <Spring
          from={{ opacity: 0, transform: "translate3d(0, -15%, 0)" }}
          to={{ opacity: 1, transform: "translate3d(0, 0, 0)" }}
          delay={1700}
        >
          {props => (
            <ContactLink href="mailto:dylan@dylandavenport.com" style={props}>
              dylan@dylandavenport.com
            </ContactLink>
          )}
        </Spring>
        <Spring
          from={{ opacity: 0, transform: "translate3d(0, -15%, 0)" }}
          to={{ opacity: 1, transform: "translate3d(0, 0, 0)" }}
          delay={1750}
        >
          {props => (
            <ContactLink href="https://github.com/DRD161" style={props}>
              https://github.com/DRD161
            </ContactLink>
          )}
        </Spring>
        <Spring
          from={{ opacity: 0, transform: "translate3d(0, -15%, 0)" }}
          to={{ opacity: 1, transform: "translate3d(0, 0, 0)" }}
          delay={1800}
        >
          {props => (
            <ContactLink
              href="https://www.linkedin.com/in/dylandavenport"
              style={props}
            >
              https://www.linkedin.com/in/dylandavenport/
            </ContactLink>
          )}
        </Spring>
      </LinkGroup>
    </>
  )
}
