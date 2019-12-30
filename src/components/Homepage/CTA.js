import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const CtaText = styled.h2`
  position: absolute;
  top: 85%;
  left: 5%;
  color: #d84358;
  z-index: 1;
  &:hover {
    color: #eeeeee;
  }
`

// const CtaArrow = styled.svg`
//   position: absolute;
//   top: 85.7%;
//   left: 15%;
//   width: 50px;
//   stroke: #c15161;
//   z-index: 1;
// `

const CTA = () => (
  <div>
    <Link to="/projects">
      <CtaText>View my work</CtaText>
    </Link>
    {/* <CtaArrow
      id="home-cta"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 119.5898 40.1982"
    >
      <line
        x1="2.0898"
        y1="20.0335"
        x2="112.1545"
        y2="20.0335"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="5"
      />
      <polyline
        points="85.337 2.369 116.59 20.034 85.337 37.698"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="5"
      />
    </CtaArrow> */}
  </div>
)

export default CTA
