import React, { useLayoutEffect } from "react"
import anime from "animejs"
import styled from "styled-components"

const Wrapper = styled.div`
  grid-column: 3 / 16;
  grid-row: 4;
`

const HomeHeaderText = styled.h1`
  font-size: 9rem;
  text-transform: uppercase;
  color: #eeeeee;
`

const RedBar = styled.div`
  width: 15px;
  background: #d84358;
  grid-column: 2;
  grid-row: 4;
  height: 90%;
  margin: auto;
`

export default function HomeHeader() {
  useLayoutEffect(() => {
    const tl = anime.timeline({
      duration: 600,
      easing: "easeOutQuad",
    })
    tl.add({
      targets: ".bar",
      opacity: [0, 100],
      translateY: ["-15%", 0],
    }).add({
      targets: ".home-header",
      delay: anime.stagger(500),
      opacity: [0, 100],
      translateX: ["-5%", 0],
    })
  })

  return (
    <>
      <Wrapper>
        <HomeHeaderText className="home-header">hello.</HomeHeaderText>
        <HomeHeaderText className="home-header">
          my name is dylan
        </HomeHeaderText>
      </Wrapper>
      <RedBar className="bar" />
    </>
  )
}
