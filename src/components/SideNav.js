import { Link } from "gatsby"
import React from "react"

import { slide as Menu } from "react-burger-menu"
import { IconContext } from "react-icons"
import { FaRegEnvelope, FaLinkedin, FaGithubSquare } from "react-icons/fa"

import "../styles/sidenav.scss"

const SideNav = () => (
  <header>
    <div>
      <Menu crossButtonClassName={"cross-hover"}>
        <Link to="/" activeClassName="active">
          home
        </Link>
        <Link to="/about" activeClassName="active">
          about
        </Link>
        <Link to="/projects" activeClassName="active">
          projects
        </Link>
        <Link to="/contact" activeClassName="active">
          contact
        </Link>
        <div className="icons-wrapper">
          <IconContext.Provider value={{ className: "social-icons" }}>
            <Link to="/">
              <FaRegEnvelope />
            </Link>
            <Link to="/">
              <FaLinkedin />
            </Link>
            <Link to="/">
              <FaGithubSquare />
            </Link>
          </IconContext.Provider>
        </div>
      </Menu>
    </div>
  </header>
)

export default SideNav
