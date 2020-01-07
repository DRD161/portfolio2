import React from "react"
import styled from "styled-components"
import Skills from "../About/Skills"

const SubTextWrapper = styled.section`
  width: 70%;
`

const SubText = styled.p`
  font-size: 1.5rem;
  color: #eeeeee;
`

const EmailLink = styled.a`
  color: #d84358;
  font-weight: 700;
  &:hover {
    color: #eeeeee;
  }
`

const AboutSubText = () => (
  <SubTextWrapper>
    <SubText>Front End Developer, husband, father & coffee lover.</SubText>
    <SubText>
      I specialize in creating user-friendly interfaces using semantic markup
      and JavaScript in order to make the web a better place.
    </SubText>
    <SubText>
      I’m always open to collaborate with great people and solve unique
      challenges. If you’re interested
    </SubText>
    <SubText>
      I'm always open to collaborate with great people and solve unique
      challenges. If you're interested{" "}
      <EmailLink href="mailto:dylan@dylandavenport.com">
        let's get to work!
      </EmailLink>
    </SubText>
    <Skills />
  </SubTextWrapper>
)

export default AboutSubText
