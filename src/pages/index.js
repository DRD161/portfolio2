import React from "react"
import Layout from "../components/layout"
import { IconContext } from "react-icons"
import SEO from "../components/seo"
import TopBlob from "../components/TopBlob"
import BottomBlob from "../components/BottomBlob"
import HomeHeader from "../components/HomeHeader"
import HomeSubText from "../components/HomeSubText"
import SocialIcons from "../components/NavSocialIcons"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <TopBlob />
    <HomeHeader />
    <HomeSubText />
    <BottomBlob />
    <IconContext.Provider value={{ className: "homepage-icons" }}>
      <SocialIcons />
    </IconContext.Provider>
  </Layout>
)

export default IndexPage
