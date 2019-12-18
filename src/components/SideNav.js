import { Link } from "gatsby"
import React from "react"

import { slide as Menu } from "react-burger-menu"

import "../styles/sidenav.scss"
const SideNav = () => (
  <header>
    <div>
      <Menu crossButtonClassName={"cross-hover"}>
        <Link to="/">home</Link>
        <Link to="/about">about</Link>
        <Link to="/projects">projects</Link>
        <Link to="/contact">contact</Link>
      </Menu>
    </div>
  </header>
)

export default SideNav
