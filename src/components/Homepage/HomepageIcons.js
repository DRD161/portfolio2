import React from "react"
import styled from "styled-components"

import { AiOutlineMail, AiOutlineLinkedin } from "react-icons/ai"
import { DiGithubAlt } from "react-icons/di"

const IconWrapper = styled.div`
  position: absolute;
  z-index: 1;
  display: flex;
  flex-direction: column;
  bottom: 0;
  right: 1%;
`

const HomepageIcon = styled.a`
  color: #eeeeee;
  font-size: 2rem;
  &:hover {
    color: #d84358;
  }
`

const HomepageIcons = () => (
  <IconWrapper>
    <HomepageIcon
      href="mailto:dylan@dylandavenport.com"
      className="homepage-icons"
    >
      <AiOutlineMail />
    </HomepageIcon>
    <HomepageIcon
      href="https://www.linkedin.com/in/dylandavenport/"
      className="homepage-icons"
    >
      <AiOutlineLinkedin />
    </HomepageIcon>
    <HomepageIcon href="https://github.com/DRD161" className="homepage-icons">
      <DiGithubAlt />
    </HomepageIcon>
  </IconWrapper>
)

export default HomepageIcons
