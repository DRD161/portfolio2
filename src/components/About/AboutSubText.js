import React from "react"
import styled from "styled-components"

const SubTextWrapper = styled.section`
  line-height: 30px;
  width: 50%;
  z-index: 1;
`

const SubText = styled.p`
  font-size: 1.7rem;
  color: #eeeeee;
`

const EmailLink = styled.a`
  color: #c15161;
  text-decoration: none;
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
      I try to approach each project from the point of view of the user. This
      helps me craft a better product that provides a simple yet effective user
      experience.
    </SubText>
    <SubText>
      I'm always open to collaborate with great people and solve unique
      challenges. If you're interested{" "}
      <EmailLink href="mailto:dylan@dylandavenport.com">
        let's get to work!
      </EmailLink>
    </SubText>
  </SubTextWrapper>
)

export default AboutSubText
