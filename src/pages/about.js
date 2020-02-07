import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import AboutHeader from "../components/About/AboutHeader"
import AboutSubText from "../components/About/AboutSubText"

const AboutTextWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(16, 1fr);
  grid-template-rows: repeat(3, minmax(75px, auto));
`

const AboutPage = () => (
  <Layout>
    <SEO title="About" description="Dylan's portfolio about page" />
    <AboutTextWrapper>
      <AboutHeader />
      <AboutSubText />
    </AboutTextWrapper>
  </Layout>
)

export default AboutPage
