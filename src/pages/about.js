import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import AboutHeader from "../components/About/AboutHeader"
import AboutSubText from "../components/About/AboutSubText"
import SkillsHeader from "../components/About/SkillsHeader"
import Skills from "../components/About/Skills"

const AboutTextWrapper = styled.div`
  position: absolute;
  bottom: 10%;
  left: 5%;
  z-index: 1;
  display: flex;
`

const AboutPage = () => (
  <Layout>
    <SEO title="About" description="Dylan's portfolio about page" />
    <AboutHeader />
    <SkillsHeader>skills:</SkillsHeader>
    <AboutTextWrapper>
      <AboutSubText />
      <Skills />
    </AboutTextWrapper>
  </Layout>
)

export default AboutPage
