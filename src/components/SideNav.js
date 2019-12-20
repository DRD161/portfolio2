import { Link } from "gatsby"
import React from "react"

import { slide as Menu } from "react-burger-menu"
import SocialIcons from "./SocialIcons"

import "../styles/sidenav.scss"

const SideNav = () => (
  <header>
    <Menu crossButtonClassName={"cross"}>
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
      <div className="sidenav-icons-wrapper">
        <SocialIcons />
      </div>
    </Menu>
  </header>
)

export default SideNav
