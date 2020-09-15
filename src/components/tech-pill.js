import React from 'react'

import style from './tech-pill.module.css'

const TechPill = ({ name }) => {
  name = name.trim()
  if (name === '') {
    return null
  }
  return (
    <span className={style.techPill}>{name.toLowerCase()}</span>
  )
}

export default TechPill
