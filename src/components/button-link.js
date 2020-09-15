import React from 'react'
import { Link } from 'gatsby'

import style from './button-link.module.css'

const ButtonLink = ({ className, large, href, children }) => {
  let classNames = `${style.buttonLink} ${className}`
  if (large) { classNames += ` ${style.large}` }
  const internal = href.startsWith('/') || href.startsWith('#')
  const external = !internal
  if (external) {
    return (
      <a className={classNames} href={href} target='_blank' rel='noopener noreferrer'>
        {children}
      </a>
    )
  } else {
    return (
      <Link className={classNames} to={href}>
        {children}
      </Link>
    )
  }
}

export default ButtonLink
