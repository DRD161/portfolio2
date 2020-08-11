import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import { AiOutlineLink } from 'react-icons/ai'
import { DiGithubAlt } from 'react-icons/di'

const ProjectsWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(16, 1fr);
  grid-auto-rows: minmax(120px, auto);
  grid-column: 1 / -1;
  grid-row: 2;
`

const ProjectLeft = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;
  grid-auto-rows: minmax(80px, 1fr);
  grid-column: 1 / -1;
  align-items: center;
`

const ProjectRight = styled.div`
  display: flex;
  flex-direction: row-reverse;
  grid-column: 2 / -1;
  align-items: center;
  @media screen and (max-width: 768px) {
    grid-column: 1 / -1;
    padding: 0 10px;
  }
`

const ProjectTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: 8 / 12;
  @media screen and (max-width: 768px) {
    width: 75%;
  }
`

const ProjectHeader = styled.h1`
  color: #eeeeee;
  font-size: 3rem;
  text-decoration: underline 1.5px #ff8a00;
  display: flex;
`

const ProjectText = styled.p`
  color: #eeeeee;
  font-size: 1.4rem;
`

const Tools = styled.p`
  font-size: 1.1rem;
  color: #959595;
  font-style: italic;
  margin-top: -3%;
`

const StyledImgLeft = styled(Img)`
  width: 100%;
  grid-column: 1 / 8;
  left: -22%;
`

const StyledImgRight = styled(Img)`
  width: 100%;
  grid-column: 1 / 8;
  right: -10%;
`

const ProjectIconsWrapper = styled.div`
  display: flex;
`

const ProjectIcon = styled.a`
  color: #eeeeee;
  font-size: 1.7rem;
  margin-top: -3%;
  &:hover {
    color: #ff8a00;
  }
`

// GatsbyImageSharpFluid_noBase64 removes image blur
export default function Projects() {
  const data = useStaticQuery(graphql`
    query {
      cryptoMockup: file(relativePath: { eq: "crypto-mockup.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      vewsMockup: file(relativePath: { eq: "vews-mockup.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      ecommerceMockup: file(relativePath: { eq: "ecommerce-mockup.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      tipMockup: file(relativePath: { eq: "tip-mockup.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      pongMockup: file(relativePath: { eq: "pong-mockup.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)

  return (
    <ProjectsWrapper>
      <ProjectLeft>
        <StyledImgLeft fluid={data.cryptoMockup.childImageSharp.fluid} />
        <ProjectTextWrapper>
          <ProjectHeader>Crypto Graph</ProjectHeader>
          <ProjectText>
            Realtime cryptocurrency dashboard used to display various price data
            for cryptocurrencies.
          </ProjectText>
          <Tools>React.js / ES6 / Bootstrap 4 / Chart.js</Tools>
          <ProjectIconsWrapper>
            <ProjectIcon href="https://crypto-graph.netlify.com/">
              <AiOutlineLink />
            </ProjectIcon>
            <ProjectIcon href="https://github.com/DRD161/crypto-graph">
              <DiGithubAlt />
            </ProjectIcon>
          </ProjectIconsWrapper>
        </ProjectTextWrapper>
      </ProjectLeft>
      <ProjectRight>
        <StyledImgRight fluid={data.vewsMockup.childImageSharp.fluid} />
        <ProjectTextWrapper>
          <ProjectHeader>Vews</ProjectHeader>
          <ProjectText>
            News app displaying latest news headlines from over 80 news sources
            using data from the News API.
          </ProjectText>
          <Tools>Vue.js / ES6 / Vuetify & Material Design</Tools>
          <ProjectIconsWrapper>
            <ProjectIcon href="https://vnews.netlify.com/">
              <AiOutlineLink />
            </ProjectIcon>
            <ProjectIcon href="https://github.com/DRD161/vews">
              <DiGithubAlt />
            </ProjectIcon>
          </ProjectIconsWrapper>
        </ProjectTextWrapper>
      </ProjectRight>
      <ProjectLeft>
        <StyledImgLeft fluid={data.ecommerceMockup.childImageSharp.fluid} />
        <ProjectTextWrapper>
          <ProjectHeader>E-commerce Store</ProjectHeader>
          <ProjectText>
            An e-commerce store that I built for an entrepreneur in my
            community.
          </ProjectText>
          <Tools>Shopify / Ruby / Liquid</Tools>
          <ProjectIconsWrapper>
            <ProjectIcon href="https://vue-tip.netlify.com/">
              <AiOutlineLink />
            </ProjectIcon>
            <ProjectIcon href="https://github.com/DRD161/vue-tip-calculatorV2">
              <DiGithubAlt />
            </ProjectIcon>
          </ProjectIconsWrapper>
        </ProjectTextWrapper>
      </ProjectLeft>
      <ProjectRight>
        <StyledImgRight fluid={data.tipMockup.childImageSharp.fluid} />
        <ProjectTextWrapper>
          <ProjectHeader>Tip Calculator</ProjectHeader>
          <ProjectText>
            A tip calculator I made to make sure I tip properly. Nobody wants to
            be the guy who doesn’t tip well!
          </ProjectText>
          <Tools>Vue.js / ES6 / Bootstrap 4</Tools>
          <ProjectIconsWrapper>
            <ProjectIcon href="https://vue-tip.netlify.com/">
              <AiOutlineLink />
            </ProjectIcon>
            <ProjectIcon href="https://github.com/DRD161/vue-tip-calculatorV2">
              <DiGithubAlt />
            </ProjectIcon>
          </ProjectIconsWrapper>
        </ProjectTextWrapper>
      </ProjectRight>
      <ProjectLeft>
        <StyledImgLeft fluid={data.pongMockup.childImageSharp.fluid} />
        <ProjectTextWrapper>
          <ProjectHeader>Pong Clone</ProjectHeader>
          <ProjectText>
            A Pong clone I made. Because who doesn’t like Pong!?
          </ProjectText>
          <Tools>JavaScript / HTML / Canvas</Tools>
          <ProjectIconsWrapper>
            <ProjectIcon href="https://vue-tip.netlify.com/">
              <AiOutlineLink />
            </ProjectIcon>
            <ProjectIcon href="https://github.com/DRD161/vue-tip-calculatorV2">
              <DiGithubAlt />
            </ProjectIcon>
          </ProjectIconsWrapper>
        </ProjectTextWrapper>
      </ProjectLeft>
    </ProjectsWrapper>
  )
}
