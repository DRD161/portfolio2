import { Link } from "gatsby"
import React from "react"
import { slide as Menu } from "react-burger-menu"
import SideNavIcons from "./SideNavIcons"

import styled from "styled-components"
import "../styles/sidenav.scss"

const IconWrapper = styled.div`
  display: flex !important;
  justify-content: space-evenly;
  width: 80%;
  margin: 100% auto;
  @media screen and (max-width: $large-monitor) {
    margin: 25% auto;
  }
`

const SideNav = () => (
  <header>
    <Menu crossButtonClassName={"cross"}>
      <Link to="/" activeClassName="active">
        home
      </Link>
      <Link to="/projects" activeClassName="active">
        projects
      </Link>
      <Link to="/about" activeClassName="active">
        about
      </Link>
      <Link to="/contact" activeClassName="active">
        contact
      </Link>
      <IconWrapper>
        <SideNavIcons />
      </IconWrapper>
    </Menu>
  </header>
)

export default SideNav
