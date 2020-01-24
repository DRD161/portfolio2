import React, { useEffect } from "react"
import anime from "animejs"
import { Link } from "gatsby"
import styled from "styled-components"
import { MdChevronRight } from "react-icons/md"

const CtaButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin-top: 5%;
  border: 3px solid #d84358;
  border-radius: 2px;
  &:hover i {
    color: #d84358;
  }
  &:hover p {
    color: #d84358;
  }
  &:hover {
    border-color: #eeeeee;
  }
`

const CtaText = styled.p`
  color: #eeeeee;
  font-size: 1.4rem;
  font-weight: 600;
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
  @media screen and (min-width: 1140px) {
    width: 17%;
  }
`

export default function CTA() {
  useEffect(() => {
    anime({
      targets: ".button",
      easing: "easeOutCubic",
      delay: 1500,
      duration: 1000,
      opacity: [0, 100],
      translateX: ["-8%", 0],
    })
  })

  return (
    <StyledLink to="/portfolio">
      <CtaButton className="button">
        <CtaText>View my work</CtaText>
        <Chevron>
          <MdChevronRight />
        </Chevron>
      </CtaButton>
    </StyledLink>
  )
}
