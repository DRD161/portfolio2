/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
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
      <main>{children}</main>
      {/* <footer></footer> */}
    </div>
  )
}

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// }

export default Layout
