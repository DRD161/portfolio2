import React from "react"
import styled from "styled-components"

const Header = styled.p`
  font-size: 5rem;
  text-transform: uppercase;
  color: #eeeeee;
  position: absolute;
  right: 22%;
  top: 25%;
  margin: auto;
  z-index: 1;
`

const SkillsHeader = () => <Header>skills</Header>

export default SkillsHeader
