import React from "react"
import styled from "styled-components"

const SkillsSection = styled.section`
  font-size: 2rem;
  color: #eeeeee;
  margin-left: 10%;
  z-index: 1;
`
const SkillsList = styled.ul`
  list-style: none;
  display: flex;
`

const SkillListCol = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 20px;
`

const SkillsItem = styled.li`
  color: #eeeeee;
  font-size: 1.7rem;
`

const Skills = () => (
  <SkillsSection>
    <h1>Skills:</h1>
    <SkillsList>
      <SkillListCol>
        <SkillsItem>- Responsive design</SkillsItem>
        <SkillsItem>- ES6</SkillsItem>
        <SkillsItem>- Vue.js</SkillsItem>
        <SkillsItem>- React.js</SkillsItem>
      </SkillListCol>
      <SkillListCol>
        <SkillsItem>- SCSS</SkillsItem>
        <SkillsItem>- Bootstrap</SkillsItem>
        <SkillsItem>- Adobe XD</SkillsItem>
        <SkillsItem>- Photoshop</SkillsItem>
      </SkillListCol>
    </SkillsList>
  </SkillsSection>
)

export default Skills
