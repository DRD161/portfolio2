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
const tl = anime.timeline({
  easing: "easingExpo",
  duration: 1000,
})

export default function AboutHeader() {
  useEffect(() => {
    const tl = anime.timeline({
      duration: 1000,
      easing: "easeInOutBack",
    })
    tl.add({
      targets: ".bar",
      opacity: [0, 100],
      top: ["-20%", "16%"],
    }).add({
      targets: ".about-header",
      delay: 200,
      opacity: [0, 100],
      left: ["8.6%", "10%"],
    })
  })

  return (
    <Wrapper>
      <RedBar className="bar" />
      <AboutHeaderText className="about-header">about</AboutHeaderText>
    </Wrapper>
  )
}
