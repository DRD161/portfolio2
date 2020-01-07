import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import PortfolioHeader from "../components/Portfolio/PortfolioHeader"

const Portfolio = () => (
  <Layout>
    <SEO title="Portfolio" description="Dylan's portfolio work page" />
    <PortfolioHeader />
  </Layout>
)

export default Portfolio
