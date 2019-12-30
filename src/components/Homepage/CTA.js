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

const CTA = () => (
  <div>
    <Link to="/projects">
      <CtaText>View my work</CtaText>
    </Link>
  </div>
)

export default CTA
