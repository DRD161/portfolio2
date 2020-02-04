import React from "react"
import { Transition } from "react-spring/renderprops"
import DesktopNav from "../components/Nav"
import SideNav from "../components/SideNav"

import { useStaticQuery, graphql } from "gatsby"

import "../styles/styles.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div>
      <SideNav siteTitle={data.site.siteMetadata.title} />
      <DesktopNav siteTitle={data.site.siteMetadata.title} />
      <Transition
        config={{ duration: 500, delay: 200 }}
        from={{ opacity: 0 }}
        enter={{ opacity: 1 }}
        leave={{ opacity: 0 }}
      >
        {() => style => <main style={style}>{children}</main>}
      </Transition>
    </div>
  )
}

export default Layout
