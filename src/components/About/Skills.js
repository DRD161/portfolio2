import React from "react"
import styled from "styled-components"

const SkillsSection = styled.section`
  font-size: 2rem;
  color: #eeeeee;
  margin-left: 10%;
  z-index: 1;
`

const SkillsHeader = styled.h2`
  text-decoration: underline;
`

const SkillsList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
`

const SkillListCol = styled.div`
  display: flex;
  flex-direction: column;
`

const SkillListCol1 = styled.div`
  display: flex;
  flex-direction: column;
`
const SkillListCol2 = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`

const SkillsItem = styled.li`
  color: #eeeeee;
  font-size: 1.5rem;
  margin-right: 60px;
`

const Skills = () => (
  <SkillsSection>
    <SkillsList>
      <SkillListCol1>
        <SkillsHeader>Front-end:</SkillsHeader>
        <SkillsItem>- Responsive design</SkillsItem>
        <SkillsItem>- ES6</SkillsItem>
        <SkillsItem>- Vue.js</SkillsItem>
        <SkillsItem>- React.js</SkillsItem>
      </SkillListCol1>
      <SkillListCol2>
        <SkillsItem>- SCSS</SkillsItem>
        <SkillsItem>- Bootstrap</SkillsItem>
        <SkillsItem>- WordPress</SkillsItem>
        <SkillsItem>- Drupal</SkillsItem>
      </SkillListCol2>
    </SkillsList>
    <SkillsList>
      <SkillListCol>
        <SkillsHeader>Back-end:</SkillsHeader>
        <SkillsItem>- PHP</SkillsItem>
        <SkillsItem>- MySQL</SkillsItem>
      </SkillListCol>
      <SkillListCol>
        <SkillsHeader>Design:</SkillsHeader>
        <SkillsItem>- Adobe XD</SkillsItem>
        <SkillsItem>- Photoshop</SkillsItem>
      </SkillListCol>
    </SkillsList>
    {/* <h2>Design:</h2> */}
    {/* <SkillsList>
      <SkillListCol>
        <SkillsItem>- Adobe XD</SkillsItem>
        <SkillsItem>- Photoshop</SkillsItem>
      </SkillListCol>
    </SkillsList> */}
  </SkillsSection>
)

export default Skills
