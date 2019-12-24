import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HomeHeader from "../components/Homepage/HomeHeader"
import HomeSubText from "../components/Homepage/HomeSubText"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" description="Dylan's portfolio homepage" />
    <HomeHeader />
    <HomeSubText />
  </Layout>
)

export default IndexPage
