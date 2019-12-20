import { Link } from "gatsby"
import React from "react"

import { slide as Menu } from "react-burger-menu"
import NavSocialIcons from "./NavSocialIcons"

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
        <NavSocialIcons />
      </div>
    </Menu>
  </header>
)

export default SideNav
