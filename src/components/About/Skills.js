import React, { useEffect } from "react"
import anime from "animejs"
import styled from "styled-components"

const SkillsWrapper = styled.section`
  margin-top: 5%;
`

const SkillsHeader = styled.h2`
  font-size: 2.5rem;
  color: #eeeeee;
  text-decoration: underline;
  text-decoration-color: #d84358;
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

export default function Skills() {
  useEffect(() => {
    const tl = anime.timeline({
      duration: 800,
      delay: anime.stagger(50),
    })
    tl.add({
      targets: ".skills-text-wrapper",
      delay: 600,
      opacity: [0, 100],
    }).add({
      targets: ".skills-text",
      easing: "easeInCubic",
      duration: 1000,
      opacity: [0, 100],
    })
  })

  useEffect(() => {
    return () => {
      anime({
        targets: ".skills-text-wrapper",
        opacity: [100, 0],
      })
    }
  })

  return (
    <SkillsWrapper className="skills-text-wrapper">
      <SkillsHeader className="skills-text">Skills</SkillsHeader>
      <SkillsList className="skills-text">
        <SkillsListHeader>Front end:</SkillsListHeader>
        <SkillItem>
          Responsive development / JavaScript / ES6 / Vue.js / React.js / SCSS /
          WordPress
        </SkillItem>
      </SkillsList>
      <SkillsList className="skills-text">
        <SkillsListHeader>Back end:</SkillsListHeader>
        <SkillItem>PHP / MySQL</SkillItem>
      </SkillsList>
      <SkillsList className="skills-text">
        <SkillsListHeader>Design:</SkillsListHeader>
        <SkillItem>Adobe XD / Photoshop / Illustrator</SkillItem>
      </SkillsList>
    </SkillsWrapper>
  )
}
