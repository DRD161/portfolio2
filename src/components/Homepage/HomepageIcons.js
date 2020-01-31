import React, { useLayoutEffect } from "react"
import anime from "animejs"
import styled from "styled-components"

import { AiOutlineMail, AiOutlineLinkedin } from "react-icons/ai"
import { DiGithubAlt } from "react-icons/di"

const IconWrapper = styled.div`
  position: absolute;
  width: 120px;
  display: flex;
  justify-content: space-between;
  bottom: 0;
  right: 3%;
`

const HomepageIcon = styled.a`
  color: #eeeeee;
  font-size: 2rem;
  &:hover {
    color: #d84358;
  }
`

export default function HomepageIcons() {
  useLayoutEffect(() => {
    const tl = anime.timeline({
      duration: 700,
      delay: anime.stagger(80),
      easing: "easeInCubic",
    })
    tl.add({
      targets: ".icon-wrapper",
      delay: 1300,
      duration: 850,
      opacity: [0, 100],
    }).add({
      targets: ".homepage-icons",
      opacity: [0, 100],
    })
  })

  return (
    <IconWrapper className="icon-wrapper">
      <HomepageIcon
        href="mailto:dylan@dylandavenport.com"
        className="homepage-icons"
      >
        <AiOutlineMail />
      </HomepageIcon>
      <HomepageIcon
        href="https://www.linkedin.com/in/dylandavenport/"
        className="homepage-icons"
      >
        <AiOutlineLinkedin />
      </HomepageIcon>
      <HomepageIcon href="https://github.com/DRD161" className="homepage-icons">
        <DiGithubAlt />
      </HomepageIcon>
    </IconWrapper>
  )
}
