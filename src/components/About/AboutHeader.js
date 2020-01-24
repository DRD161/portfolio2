import React, { useEffect } from "react"
import anime from "animejs"
import styled from "styled-components"

const Wrapper = styled.div`
  position: relative;
`

const AboutHeaderText = styled.h3`
  font-size: 6rem;
  color: #eeeeee;
  position: relative;
  left: 10%;
`

const RedBar = styled.div`
  width: 15px;
  background: #d84358;
  position: absolute;
  top: 16%;
  right: 90%;
  height: 70%;
  margin-right: 5px;
`

export default function AboutHeader() {
  useEffect(() => {
    const tl = anime.timeline({
      duration: 500,
      easing: "easeOutQuad",
    })
    tl.add({
      targets: ".bar",
      opacity: [0, 100],
      translateY: ["-25%", 0],
    }).add({
      targets: ".about-header",
      delay: 200,
      opacity: [0, 100],
      translateX: ["-2%", 0],
    })
  })

  return (
    <Wrapper>
      <RedBar className="bar" />
      <AboutHeaderText className="about-header">about</AboutHeaderText>
    </Wrapper>
  )
}
