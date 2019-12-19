import React from "react"
import Layout from "../components/layout"
// import { Link } from "gatsby"
import { IconContext } from "react-icons"
import SEO from "../components/seo"
import TopBlob from "../components/TopBlob"
import BottomBlob from "../components/BottomBlob"
import HomeTextBack from "../components/HomeTextBack"
import HomeTextFront from "../components/HomeTextFront"
import SocialIcons from "../components/SocialIcons"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <TopBlob />
    <HomeTextBack />
    <HomeTextFront className="foreground-text" />
    <BottomBlob />
    <IconContext.Provider value={{ className: "homepage-icons" }}>
      <SocialIcons />
    </IconContext.Provider>
  </Layout>
)

export default IndexPage
