/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

import './layout.css'
import Header from './header'
import Footer from './footer'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(name: {eq: "lpld-logo"}) {
        publicURL
      }
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <>
      <Header logo={data.logo.publicURL} />
      <main>{children}</main>
      <Footer author={data.site.siteMetadata.author} />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
