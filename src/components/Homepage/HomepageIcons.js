import React from "react"
import { AiOutlineMail, AiOutlineLinkedin } from "react-icons/ai"
import { DiGithubAlt } from "react-icons/di"
const HomepageIcons = () => (
  <div className="homepage-icon-wrapper">
    <a href="mailto:dylan@dylandavenport.com" className="homepage-icons">
      <AiOutlineMail />
    </a>
    <a
      href="https://www.linkedin.com/in/dylandavenport/"
      className="homepage-icons"
    >
      <AiOutlineLinkedin />
    </a>
    <a href="https://github.com/DRD161" className="homepage-icons">
      <DiGithubAlt />
    </a>
  </div>
)

export default HomepageIcons
