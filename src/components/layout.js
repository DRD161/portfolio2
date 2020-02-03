/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { Transition } from "react-spring/renderprops"
// import anime from "animejs"
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

  // const exitTrans = () =>
  //   anime({
  //     targets: ".test",
  //     translateX: "-12%",
  //     duration: 1000,
  //   })

  // const entryTrans = () =>
  //   anime({
  //     targets: ".test",
  //     translateX: 0,
  //     duration: 1000,
  //   })

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

      {/* <footer></footer> */}
    </div>
  )
}

export default Layout
