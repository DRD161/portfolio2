import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { MdChevronRight } from "react-icons/md"

const CtaButton = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
  border: 3px solid #d84358;
  border-radius: 2px;
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
`

const Chevron = styled.i`
  display: flex;
  color: #eeeeee;
  font-size: 2rem;
`

const StyledLink = styled(props => <Link {...props} />)`
  text-decoration: none;
  width: 15%;
`

const CTA = () => (
  <StyledLink to="/projects">
    <CtaButton>
      <CtaText>View my work</CtaText>
      <Chevron>
        <MdChevronRight />
      </Chevron>
    </CtaButton>
  </StyledLink>
)

export default CTA
