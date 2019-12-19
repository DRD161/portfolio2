import { Link } from "gatsby"
import React from "react"

import { slide as Menu } from "react-burger-menu"
import { IconContext } from "react-icons"
import SocialIcons from "../components/SocialIcons"

import "../styles/sidenav.scss"

const SideNav = () => (
  <header>
    <div>
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
        <IconContext.Provider value={{ className: "sidenav-icons" }}>
          <SocialIcons className="icons-wrapper" />
        </IconContext.Provider>
      </Menu>
    </div>
  </header>
)

export default SideNav
