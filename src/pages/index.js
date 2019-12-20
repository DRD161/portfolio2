import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import TopBlob from "../components/TopBlob"
import BottomBlob from "../components/BottomBlob"
import HomeHeader from "../components/HomeHeader"
import HomeSubText from "../components/HomeSubText"
import SocialIcons from "../components/SocialIcons"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <TopBlob />
    <HomeHeader />
    <HomeSubText />
    <BottomBlob />
    <SocialIcons />
  </Layout>
)

export default IndexPage
