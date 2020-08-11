import React from 'react'
import { AiOutlineMail, AiOutlineLinkedin } from 'react-icons/ai'
import { DiGithubAlt } from 'react-icons/di'
import styled from 'styled-components'

const Icon = styled.a`
  color: #eeeeee;
  font-size: 2.5rem;
  margin-right: 10px;
  &:nth-child(3) {
    margin-right: 0;
  }
     &:hover {
    color: #ff8a00;
  }
`

const SideNavIcons = () => (
  <div>
    <Icon href="mailto:dylan@dylandavenport.com" className="sidenav-icons">
      <AiOutlineMail />
    </Icon>
    <Icon
      href="https://www.linkedin.com/in/dylandavenport/"
      className="sidenav-icons"
    >
      <AiOutlineLinkedin />
    </Icon>
    <Icon href="https://github.com/DRD161" className="sidenav-icons">
      <DiGithubAlt />
    </Icon>
  </div>
)

export default SideNavIcons
