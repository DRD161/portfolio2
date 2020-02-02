import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"

import HomeHeader from "../components/Homepage/HomeHeader"
import HomeSubText from "../components/Homepage/HomeSubText"
import CTA from "../components/Homepage/CTA"
import HomepageIcons from "../components/Homepage/HomepageIcons"

const HomeWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(16, 1fr);
  grid-template-rows: repeat(8, 0.15fr);
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
