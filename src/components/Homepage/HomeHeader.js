import React, { useLayoutEffect } from "react"
import anime from "animejs"
import styled from "styled-components"

const Wrapper = styled.div`
  position: relative;
`

const HomeHeaderText = styled.h1`
  font-size: 9rem;
  text-transform: uppercase;
  color: #eeeeee;
  position: relative;
`

const RedBar = styled.div`
  width: 15px;
  background: #d84358;
  position: absolute;
  top: 9%;
  height: 78%;
  right: 100%;
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
      translateX: ["-2%", 0],
    })
  })

  return (
    <Wrapper>
      <RedBar className="bar" />
      <HomeHeaderText className="home-header">hello.</HomeHeaderText>
      <HomeHeaderText className="home-header">my name is dylan</HomeHeaderText>
    </Wrapper>
  )
}
