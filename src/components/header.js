import React from 'react'
import { Link } from 'gatsby'

import style from './header.module.css'

const Header = ({ logo }) => {
  return (
    <header>
      <Link to='/'>
        <img className={style.logo} src={logo} alt='lpld logo' />
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
