import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { MdChevronRight } from "react-icons/md"

const CtaButton = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
  position: absolute;
  bottom: 10%;
  left: 6%;
  border: 3px solid #d84358;
  border-radius: 2px;
  z-index: 1;
  &:hover i {
    color: #d84358;
  }
  &:hover h2 {
    color: #d84358;
  }
  &:hover {
    border-color: #eeeeee;
  }
`

const CtaText = styled.h2`
  color: #eeeeee;
  margin-bottom: 0;
  z-index: 1;
`

const Chevron = styled.i`
  display: flex;
  color: #eeeeee;
  font-size: 2rem;
  z-index: 1;
`

const CTA = () => (
  <Link to="/projects">
    <CtaButton>
      <CtaText>View my work</CtaText>
      <Chevron>
        <MdChevronRight />
      </Chevron>
    </CtaButton>
  </Link>
)

export default CTA
