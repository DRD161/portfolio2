import React from "react"
import styled from "styled-components"

import SEO from "../components/seo"
import Layout from "../components/layout"
import PortfolioHeader from "../components/Portfolio/PortfolioHeader"
import Mockup from "../components/Portfolio/Projects"

const PortfolioWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(16, 1fr);
  grid-template-rows: auto;
  position: relative;
`

const GithubLink = styled.a`
  display: flex;
  justify-content: center;
  grid-column: 7 / 11;
  grid-row: 3;
  font-size: 2rem;
  color: #eeeeee;
  margin-bottom: 20px;
  &:hover {
    color: #d84358;
  }
`

const TopShape = styled.div`
  position: absolute;
  top: 25%;
  width: 100%;
  height: 100%;
  transform: skewY(-8deg);
  background-color: #262525;
  z-index: -1;
`

const BottomShape = styled.div`
  position: absolute;
  top: 235%;
  width: 100%;
  height: 100%;
  transform: skewY(8deg);
  background-color: #262525;
  z-index: -1;
`

export default function portfolio() {
  return (
    <Layout>
      <SEO title="Portfolio" description="Dylan's portfolio work page" />
      <TopShape />
      <PortfolioWrapper>
        <PortfolioHeader />
        <Mockup />
        <GithubLink href="https://github.com/DRD161">
          See more on Github
        </GithubLink>
      </PortfolioWrapper>
      <BottomShape />
    </Layout>
  )
}
