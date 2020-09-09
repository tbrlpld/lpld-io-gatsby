import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import style from './header.module.css'

const Header = ({ siteTitle }) => (
  <header>
    <nav>
      <ul>
        <li><Link to='/#projects'>Projects</Link></li>
        <li><Link to='/#contact'>Contact</Link></li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ''
}

export default Header
