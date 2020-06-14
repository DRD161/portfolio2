import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import SEO from '../components/seo'
import HomeHeader from '../components/Homepage/HomeHeader'

const HomeWrapper = styled.main`
  display: grid;
  grid-template-columns: repeat(16, 1fr);
  grid-auto-rows: minmax(100px, auto);
  @media screen and (max-width: 768px) {
    grid-auto-rows: minmax(120px, auto);
  }
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

const IndexPage = () => (
  <Layout>
    <HomeWrapper>
      <SEO title="Home" description="Dylan's portfolio homepage" />
      <HomeHeader />
      <PageNumber>
        01
        <PageTitle>home</PageTitle>
      </PageNumber>
    </HomeWrapper>
  </Layout>
)

export default IndexPage
