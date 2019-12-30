import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"

import HomeHeader from "../components/Homepage/HomeHeader"
import HomeSubText from "../components/Homepage/HomeSubText"
import CTA from "../components/Homepage/CTA"
import BgImage from "../components/BgImage"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" description="Dylan's portfolio homepage" />
    <HomeHeader />
    <HomeSubText />
    <CTA />
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

export default IndexPage
