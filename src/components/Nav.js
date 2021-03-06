import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const NavWrapper = styled.nav`
  display: flex;
  justify-content: flex-end;
  @media screen and (max-width: 769px) {
    display: none;
  }
`

const NavItem = styled(props => <Link {...props} />)`
  font-size: 1.2rem;
  color: #eeeeee;
  margin: 10px 15px 0 0;
  text-decoration: none;
`

export default function Nav() {
  return (
    <NavWrapper>
      <NavItem to="/" activeClassName="active">
        home
      </NavItem>
      <NavItem to="/portfolio" activeClassName="active">
        portfolio
      </NavItem>
      <NavItem to="/about" activeClassName="active">
        about
      </NavItem>
      <NavItem to="/contact" activeClassName="active">
        contact
      </NavItem>
    </NavWrapper>
  )
}
