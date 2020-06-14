import React from 'react'
import styled from 'styled-components'

import SEO from '../components/seo'
import Layout from '../components/layout'
// import PortfolioHeader from '../components/Portfolio/PortfolioHeader'
import Mockup from '../components/Portfolio/Projects'

const PortfolioWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(16, 1fr);
  grid-auto-rows: minmax(120px, auto);
`

const PageNumber = styled.h1`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #eeeeee;
  font-size: 10rem;
  grid-column: 15/17;
  grid-row: 1;
  font-weight: 400;
  opacity: 10%;
`

const PageTitle = styled.h1`
  color: #eeeeee;
  font-size: 2rem;
  grid-column: 15/17;
  grid-row: 1;
  font-weight: 400;
`

const GithubLink = styled.a`
  display: flex;
  justify-content: center;
  align-self: center;
  grid-column: 7 / 11;
  grid-row: 3;
  font-size: 2rem;
  color: #eeeeee;
  &:hover {
    color: #d84358;
  }
  @media screen and (max-width: 768px) {
    grid-column: 6 / 12;
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
  @media screen and (max-width: 768px) {
    top: 18%;
    width: 100%;
    height: 50%;
  }
`

const BottomShape = styled.div`
  position: absolute;
  top: 235%;
  width: 100%;
  height: 100%;
  transform: skewY(8deg);
  background-color: #262525;
  z-index: -1;
  @media screen and (max-width: 768px) {
    top: 105%;
    width: 100%;
    height: 50%;
  }
`

export default function portfolio() {
  return (
    <Layout>
      <SEO title="Portfolio" description="Dylan's portfolio work page" />
      <TopShape />
      <PortfolioWrapper>
        <PageNumber>
          02
          <PageTitle>portfolio</PageTitle>
        </PageNumber>
        <Mockup />
        <GithubLink href="https://github.com/DRD161">
          See more on Github
        </GithubLink>
      </PortfolioWrapper>
      <BottomShape />
    </Layout>
  )
}
