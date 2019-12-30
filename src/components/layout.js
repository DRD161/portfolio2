/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import SideNav from "../components/SideNav"
import Lines from "../components/Lines"
import HomepageIcons from "./Homepage/HomepageIcons"
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
      <div>
        <main>{children}</main>
        <Lines />
        <HomepageIcons />
        {/* <footer></footer> */}
      </div>
    </div>
  )
}

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// }

export default Layout
