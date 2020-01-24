import React, { useEffect } from "react"
import anime from "animejs"
import styled from "styled-components"

const Wrapper = styled.div`
  width: 70%;
`

const SubHeader = styled.p`
  font-size: 1.7rem;
  color: #959595;
  font-style: italic;
  margin-bottom: 0;
`

export default function HomeSubText() {
  useEffect(() => {
    const tl = anime.timeline({
      duration: 800,
      delay: anime.stagger(50),
    })
    tl.add({
      targets: ".home-text-wrapper",
      opacity: [0, 100],
      delay: 700,
    }).add({
      targets: ".home-subtext",
      duration: 1000,
      easing: "easeInCubic",
      opacity: [0, 100],
    })
  })

  return (
    <Wrapper className="home-text-wrapper">
      <SubHeader className="home-subtext">
        I’m a Front End Developer & UX enthusiast specializing in using
        JavaScript
      </SubHeader>
      <SubHeader className="home-subtext">
        to create dynamic data driven content for the web.
      </SubHeader>
    </Wrapper>
  )
}
