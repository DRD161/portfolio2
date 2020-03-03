import React from "react"
import { animated } from "react-spring"
import { Spring } from "react-spring/renderprops"
import { Link } from "gatsby"
import styled from "styled-components"
import { MdChevronRight } from "react-icons/md"

const CtaButton = styled(animated.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
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
  grid-column: 3/6;
  grid-row: 5;
  align-self: center;
  height: 100%;
  @media screen and (max-width: 768px) {
    grid-column: 3/8;
  }
`

export default function CTA() {
  return (
    <StyledLink to="/portfolio">
      <Spring
        from={{
          opacity: 0,
          transform: "translate3d(-8%, 0, 0)",
        }}
        to={{
          opacity: 1,
          transform: "translate3d(0, 0, 0)",
        }}
        config={{ delay: 1500 }}
      >
        {props => (
          <CtaButton style={props}>
            <CtaText>View my work</CtaText>
            <Chevron>
              <MdChevronRight />
            </Chevron>
          </CtaButton>
        )}
      </Spring>
    </StyledLink>
  )
}
