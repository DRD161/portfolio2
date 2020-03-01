import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"

import HomeHeader from "../components/Homepage/HomeHeader"
import HomeSubText from "../components/Homepage/HomeSubText"
import CTA from "../components/Homepage/CTA"
import HomepageIcons from "../components/Homepage/HomepageIcons"

const HomeWrapper = styled.main`
  display: grid;
  grid-template-columns: repeat(16, 1fr);
  grid-auto-rows: minmax(100px, auto);
  @media screen and (max-width: 768px) {
    grid-auto-rows: minmax(120px, auto);
  }
`

const IndexPage = () => (
  <Layout>
    <HomeWrapper>
      <SEO title="Home" description="Dylan's portfolio homepage" />
      <HomeHeader />
      <HomeSubText />
      <CTA />
      <HomepageIcons />
    </HomeWrapper>
  </Layout>
)

export default IndexPage
