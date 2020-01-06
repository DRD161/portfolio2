import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"

import HomeHeader from "../components/Homepage/HomeHeader"
import HomeSubText from "../components/Homepage/HomeSubText"
import CTA from "../components/Homepage/CTA"
import Lines from "../components/Lines"

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 5%;
  bottom: 0;
  right: 0;
`

const IndexPage = () => (
  <Layout>
    <HomeWrapper>
      <SEO title="Home" description="Dylan's portfolio homepage" />
      <HomeHeader />
      <HomeSubText />
      <CTA />
      <Lines />
    </HomeWrapper>
  </Layout>
)

export default IndexPage
