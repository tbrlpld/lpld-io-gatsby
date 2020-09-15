import React from 'react'

import style from './button-link.module.css'

const ButtonLink = (props) => {
  let className = `${style.buttonLink} ${props.className}`
  if (props.large) { className += ` ${style.large}` }
  return (
    <a className={className} href={props.href}>
      {props.children}
    </a>
  )
}

export default ButtonLink
