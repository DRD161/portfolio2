import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ProjectRight = styled.div`
  display: flex;
  justify-content: space-around;
`

const ProjectLeft = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-around;
`

const ProjectHeader = styled.h1`
  color: #eeeeee;
  font-size: 3rem;
  text-decoration: underline #d84358;
  margin: 0 12% 0 12%;
`

const Mockup = () => {
  const data = useStaticQuery(graphql`
    query {
      vewsMockup: file(relativePath: { eq: "vews-mockup.png" }) {
        childImageSharp {
          fixed(width: 750) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      cryptoMockup: file(relativePath: { eq: "crypto-mockup.png" }) {
        childImageSharp {
          fixed(width: 750) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      tipMockup: file(relativePath: { eq: "tip-mockup.png" }) {
        childImageSharp {
          fixed(width: 750) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      ecommerceMockup: file(relativePath: { eq: "ecommerce-mockup.png" }) {
        childImageSharp {
          fixed(width: 750) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      pongMockup: file(relativePath: { eq: "pong-mockup.png" }) {
        childImageSharp {
          fixed(width: 750) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      galleryMockup: file(relativePath: { eq: "gallery-mockup.png" }) {
        childImageSharp {
          fixed(width: 750) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <div>
      <ProjectRight>
        <Img fixed={data.vewsMockup.childImageSharp.fixed} />
        <ProjectHeader>Vews</ProjectHeader>
      </ProjectRight>
      <ProjectLeft>
        <Img fixed={data.cryptoMockup.childImageSharp.fixed} />
        <ProjectHeader>Crypto Graph</ProjectHeader>
      </ProjectLeft>
      <ProjectRight>
        <Img fixed={data.tipMockup.childImageSharp.fixed} />
        <ProjectHeader>Tip Calculator</ProjectHeader>
      </ProjectRight>
      <ProjectLeft>
        <Img fixed={data.ecommerceMockup.childImageSharp.fixed} />
        <ProjectHeader>E-commerce Store</ProjectHeader>
      </ProjectLeft>
      <ProjectRight>
        <Img fixed={data.pongMockup.childImageSharp.fixed} />
        <ProjectHeader>Pong Clone</ProjectHeader>
      </ProjectRight>
      <ProjectLeft>
        <Img fixed={data.galleryMockup.childImageSharp.fixed} />
        <ProjectHeader>Photo Gallery</ProjectHeader>
      </ProjectLeft>
    </div>
  )
}
export default Mockup
