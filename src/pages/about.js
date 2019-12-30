import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import AboutHeader from "../components/About/AboutHeader"
import AboutSubText from "../components/About/AboutSubText"
import SkillsHeader from "../components/About/SkillsHeader"
import Skills from "../components/About/Skills"
import BgImage from "../components/BgImage"

const AboutTextWrapper = styled.div`
  position: absolute;
  bottom: 10%;
  left: 5%;
  z-index: 1;
  display: flex;
`

const AboutPage = ({ data }) => (
  <Layout>
    <SEO title="About" description="Dylan's portfolio about page" />
    <AboutHeader />
    <SkillsHeader>skills:</SkillsHeader>
    <AboutTextWrapper>
      <AboutSubText />
      <Skills />
    </AboutTextWrapper>
    <BgImage
      title="sky"
      fluid={data.sky.childImageSharp.fluid}
      overlayColor="rgb(0,0,0, 0.50)"
    ></BgImage>
  </Layout>
)

export const query = graphql`
  query {
    sky: file(relativePath: { eq: "pink-sky.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default AboutPage
