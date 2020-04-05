import React from 'react'
import { Link } from 'gatsby'
import { slide as Menu } from 'react-burger-menu'
import SideNavIcons from './SideNavIcons'

import '../styles/sidenav.scss'

const SideNav = () => (
  <header>
    <Menu crossButtonClassName={'cross'}>
      <Link to="/" activeClassName="active">
        home
      </Link>
      <Link to="/portfolio" activeClassName="active">
        portfolio
      </Link>
      <Link to="/about" activeClassName="active">
        about
      </Link>
      <Link to="/contact" activeClassName="active">
        contact
      </Link>
      <div>
        <SideNavIcons />
      </div>
    </Menu>
  </header>
)

export default SideNav
