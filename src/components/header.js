import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, useStaticQuery } from 'gatsby'

import style from './header.module.css'

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(name: {eq: "lpld-logo"}) {
        publicURL
      }
    }
  `)
  console.log(data)

  return (
    <header>
      <img className={style.logo} src={data.logo.publicURL} />
      <nav>
        <ul>
          <li><Link className={style.navLink} to='/#projects'>Projects</Link></li>
          <li><Link className={style.navLink} to='/#contact'>Contact</Link></li>
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
