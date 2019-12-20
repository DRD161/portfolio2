import React from "react"
import { IconContext } from "react-icons"
import { FaRegEnvelope, FaLinkedin, FaGithubSquare } from "react-icons/fa"

const SocialIcons = () => (
  <IconContext.Provider value={{ className: "sidenav-icons" }}>
    <FaRegEnvelope />
    <FaLinkedin />
    <FaGithubSquare />
  </IconContext.Provider>
)

export default SocialIcons
