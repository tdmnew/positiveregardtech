/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"

import Hero from "../pages/hero";
import About from "../pages/about";
import SelectedWork from "../pages/selectedWork";
import Contact from "../pages/contact";

//import "./layout.css"

import "../scss/styles.scss";

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
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div>
        <main>
          {children}
            <Hero/>
            <About/>
            <SelectedWork/>
            <Contact/>
        </main>

      </div>
    </>
  )
}

//<footer class="footer">
//    © {new Date().getFullYear()}, Positive Regard Tech
//</footer>
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
