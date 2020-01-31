import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { AiOutlineLink } from "react-icons/ai"
import { DiGithubAlt } from "react-icons/di"

const ProjectRight = styled.div`
  display: flex;
  justify-content: space-center;
  margin-top: 5%;
`

const ProjectLeft = styled.div`
  display: flex;
  justify-content: space-center;
  flex-direction: row-reverse;
  margin-top: 5%;
`

const ProjectTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
`

const ProjectHeader = styled.h1`
  color: #eeeeee;
  font-size: 3rem;
  text-decoration: underline #d84358;
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

const StyledImg = styled(Img)`
  width: 50%;
`

const SkillsIconsWrapper = styled.div`
  display: flex;
`

const SkillsIcon = styled.a`
  color: #eeeeee;
  font-size: 1.7rem;
  margin-top: -3%;
  &:hover {
    color: #d84358;
  }
`

const Mockup = () => {
  const data = useStaticQuery(graphql`
    query {
      vewsMockup: file(relativePath: { eq: "vews-mockup.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cryptoMockup: file(relativePath: { eq: "crypto-mockup.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      tipMockup: file(relativePath: { eq: "tip-mockup.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ecommerceMockup: file(relativePath: { eq: "ecommerce-mockup.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      pongMockup: file(relativePath: { eq: "pong-mockup.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      galleryMockup: file(relativePath: { eq: "gallery-mockup.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <section>
      <ProjectRight>
        <StyledImg fluid={data.vewsMockup.childImageSharp.fluid} />
        <ProjectTextWrapper>
          <ProjectHeader>Vews</ProjectHeader>
          <ProjectText>
            News app displaying latest news headlines from over 80 news sources
            using data from the News API.
          </ProjectText>
          <Tools>Vue.js / ES6 / Vuetify & Material Design</Tools>
          <SkillsIconsWrapper>
            <SkillsIcon href="https://vnews.netlify.com/">
              <AiOutlineLink />
            </SkillsIcon>
            <SkillsIcon href="https://github.com/DRD161/vews">
              <DiGithubAlt />
            </SkillsIcon>
          </SkillsIconsWrapper>
        </ProjectTextWrapper>
      </ProjectRight>
      <ProjectLeft>
        <StyledImg fluid={data.cryptoMockup.childImageSharp.fluid} />
        <ProjectTextWrapper>
          <ProjectHeader>Crypto Graph</ProjectHeader>
          <ProjectText>
            Realtime cryptocurrency dashboard used to display various price data
            for cryptocurrencies.
          </ProjectText>
          <Tools>React.js / ES6 / Bootstrap 4 / Chart.js</Tools>
          <SkillsIconsWrapper>
            <SkillsIcon href="https://crypto-graph.netlify.com/">
              <AiOutlineLink />
            </SkillsIcon>
            <SkillsIcon href="https://github.com/DRD161/crypto-graph">
              <DiGithubAlt />
            </SkillsIcon>
          </SkillsIconsWrapper>
        </ProjectTextWrapper>
      </ProjectLeft>
      <ProjectRight>
        <StyledImg fluid={data.tipMockup.childImageSharp.fluid} />
        <ProjectTextWrapper>
          <ProjectHeader>Tip Calculator</ProjectHeader>
          <ProjectText>
            A tip calculator I made to make sure I tip properly. Nobody wants to
            be the guy who doesn’t tip well!
          </ProjectText>
          <Tools>Vue.js / ES6 / Bootstrap 4</Tools>
          <SkillsIconsWrapper>
            <SkillsIcon href="https://vue-tip.netlify.com/">
              <AiOutlineLink />
            </SkillsIcon>
            <SkillsIcon href="https://github.com/DRD161/vue-tip-calculatorV2">
              <DiGithubAlt />
            </SkillsIcon>
          </SkillsIconsWrapper>
        </ProjectTextWrapper>
      </ProjectRight>
      <ProjectLeft>
        <StyledImg fluid={data.ecommerceMockup.childImageSharp.fluid} />
        <ProjectTextWrapper>
          <ProjectHeader>E-commerce Store</ProjectHeader>
          <ProjectText>
            An e-commerce store that I built for an entrepreneur in my
            community.
          </ProjectText>
          <Tools>Shopify / Ruby / Liquid Templating</Tools>
          <SkillsIconsWrapper>
            <SkillsIcon href="https://vue-tip.netlify.com/">
              <AiOutlineLink />
            </SkillsIcon>
            <SkillsIcon href="https://github.com/DRD161/vue-tip-calculatorV2">
              <DiGithubAlt />
            </SkillsIcon>
          </SkillsIconsWrapper>
        </ProjectTextWrapper>
      </ProjectLeft>
      <ProjectRight>
        <StyledImg fluid={data.pongMockup.childImageSharp.fluid} />
        <ProjectTextWrapper>
          <ProjectHeader>Pong Clone</ProjectHeader>
          <ProjectText>
            A Pong clone I made. Because who doesn’t like Pong!?
          </ProjectText>
          <Tools>JavaScript / HTML / Canvas</Tools>
          <SkillsIconsWrapper>
            <SkillsIcon href="https://vue-tip.netlify.com/">
              <AiOutlineLink />
            </SkillsIcon>
            <SkillsIcon href="https://github.com/DRD161/vue-tip-calculatorV2">
              <DiGithubAlt />
            </SkillsIcon>
          </SkillsIconsWrapper>
        </ProjectTextWrapper>
      </ProjectRight>
    </section>
  )
}
export default Mockup
