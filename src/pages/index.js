import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"

import HomeHeader from "../components/Homepage/HomeHeader"
import HomeSubText from "../components/Homepage/HomeSubText"
import CTA from "../components/Homepage/CTA"

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  @media screen and (min-width: 1200px) {
    width: 95%;
  }
`

const IndexPage = () => (
  <Layout>
    <HomeWrapper>
      <SEO title="Home" description="Dylan's portfolio homepage" />
      <HomeHeader />
      <HomeSubText />
      <CTA />
    </HomeWrapper>
  </Layout>
)

export default IndexPage
