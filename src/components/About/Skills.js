import React from "react"
import { Spring } from "react-spring/renderprops"

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
  @media screen and (max-width: 768px) {
    font-size: 1.09rem;
  }
`

export default function Skills() {
  return (
    <SkillsWrapper>
      <Spring
        from={{ opacity: 0, transform: "translate3d(0, -15%, 0)" }}
        to={{ opacity: 1, transform: "translate3d(0, 0, 0)" }}
        delay={1800}
      >
        {props => <SkillsHeader style={props}>Skills</SkillsHeader>}
      </Spring>
      <Spring
        from={{ opacity: 0, transform: "translate3d(0, -15%, 0)" }}
        to={{ opacity: 1, transform: "translate3d(0, 0, 0)" }}
        delay={1850}
      >
        {props => (
          <SkillsList style={props}>
            <SkillsListHeader>Front end:</SkillsListHeader>
            <SkillItem>
              Responsive development / JavaScript / ES6 / Vue.js / React.js /
              SCSS / WordPress
            </SkillItem>
          </SkillsList>
        )}
      </Spring>
      <Spring
        from={{ opacity: 0, transform: "translate3d(0, -15%, 0)" }}
        to={{ opacity: 1, transform: "translate3d(0, 0, 0)" }}
        delay={1900}
      >
        {props => (
          <SkillsList style={props}>
            <SkillsListHeader>Back end:</SkillsListHeader>
            <SkillItem>PHP / MySQL</SkillItem>
          </SkillsList>
        )}
      </Spring>
      <Spring
        from={{ opacity: 0, transform: "translate3d(0, -15%, 0)" }}
        to={{ opacity: 1, transform: "translate3d(0, 0, 0)" }}
        delay={1950}
      >
        {props => (
          <SkillsList style={props}>
            <SkillsListHeader>Design:</SkillsListHeader>
            <SkillItem>Adobe XD / Photoshop / Illustrator</SkillItem>
          </SkillsList>
        )}
      </Spring>
    </SkillsWrapper>
  )
}
