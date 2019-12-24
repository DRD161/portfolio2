import React from "react"
import { AiOutlineMail, AiOutlineLinkedin } from "react-icons/ai"
import { DiGithubAlt } from "react-icons/di"
const SideNavIcons = () => (
  <div>
    <a href="mailto:dylan@dylandavenport.com" className="sidenav-icons">
      <AiOutlineMail />
    </a>
    <a
      href="https://www.linkedin.com/in/dylandavenport/"
      className="sidenav-icons"
    >
      <AiOutlineLinkedin />
    </a>
    <a href="https://github.com/DRD161" className="sidenav-icons">
      <DiGithubAlt />
    </a>
  </div>
)

export default SideNavIcons
