import React, { useEffect } from "react"
import anime from "animejs"
import styled from "styled-components"
import Skills from "../About/Skills"

const SubText = styled.p`
  font-size: 2.3rem;
  color: #eeeeee;
`

const EmailLink = styled.a`
  color: #d84358;
  font-weight: 700;
  &:hover {
    color: #eeeeee;
  }
`

export default function AboutSubText() {
  useEffect(() => {
    const tl = anime
      .timeline({
        duration: 1000,
        easing: "easeInOutBack",
      })
      .add({
        targets: ".about-text",
        delay: anime.stagger(500),
        top: ["-20%", 0],
        opacity: [0, 100],
      })
  })

  return (
    <section className="subtext-wrapper">
      <SubText className="about-text">
        Front End Developer, husband, father & coffee lover.
      </SubText>
      <SubText className="about-text">
        I specialize in creating user-friendly interfaces using semantic markup
        and JavaScript in order to make the web a better place.
      </SubText>
      <SubText className="about-text">
        I'm always open to collaborate with great people and solve unique
        challenges. If you're interested <br></br>
        <EmailLink
          href="mailto:dylan@dylandavenport.com"
          className="about-text"
        >
          let's get to work!
        </EmailLink>
      </SubText>
      <Skills />
    </section>
  )
}
