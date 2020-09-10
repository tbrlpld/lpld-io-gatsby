import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

import style from './header.module.css'

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
      <Link to='/'>
        <img className={style.logo} src={data.logo.publicURL} alt='lpld logo' />
      </Link>
      <nav>
        <ul>
          <li><Link className={style.navLink} to='/#projects'>Projects</Link></li>
          <li><Link className={style.navLink} to='/#contact'>Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
