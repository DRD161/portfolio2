import React from "react"
import styled from "styled-components"

const SkillsHeader = styled.h2`
  font-size: 2rem;
  color: #eeeeee;
`

const SkillsList = styled.ul`
  list-style: none;
  display: flex;
  margin-bottom: 0;
  margin-left: 0;
`

const SkillsListHeader = styled.h3`
  color: #eeeeee;
  margin-right: 10px;
`

const SkillItem = styled.li`
  color: #eeeeee;
  font-size: 1.2rem;
  font-style: italic;
`

const Skills = () => (
  <div>
    <SkillsHeader>Skills</SkillsHeader>
    <SkillsList>
      <SkillsListHeader>Front end:</SkillsListHeader>
      <SkillItem>
        Responsive development / JavaScript / ES6 / Vue.js / React.js / SCSS /
        WordPress
      </SkillItem>
    </SkillsList>
    <SkillsList>
      <SkillsListHeader>Back end:</SkillsListHeader>
      <SkillItem>PHP / MySQL</SkillItem>
    </SkillsList>
    <SkillsList>
      <SkillsListHeader>Design:</SkillsListHeader>
      <SkillItem>Adobe XD / Photoshop / Illustrator</SkillItem>
    </SkillsList>
  </div>
)

export default Skills
