import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, useStaticQuery } from 'gatsby'

import _ from './header.module.css'

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(name: {eq: "lpld-logo"}) {
        publicURL
      }
    }
  `)

  return (
    <header>
      <svg width='48' height='48' xmlns='http://www.w3.org/2000/svg'>
        <image src={data.logo.publicURL} />
      </svg>
      <nav>
        <ul>
          <li><Link to='/#projects'>Projects</Link></li>
          <li><Link to='/#contact'>Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ''
}

export default Header
