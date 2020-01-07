import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import AboutHeader from "../components/About/AboutHeader"
import AboutSubText from "../components/About/AboutSubText"

const AboutTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5%;
`

const AboutPage = () => (
  <Layout>
    <SEO title="About" description="Dylan's portfolio about page" />
    <AboutHeader />
    <AboutTextWrapper>
      <AboutSubText />
    </AboutTextWrapper>
  </Layout>
)

export default AboutPage
