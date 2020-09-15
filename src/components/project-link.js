import React from 'react'

import ButtonLink from './button-link'

import style from './project-link.module.css'

const ProjectLink = ({ children, to }) => {
  return (
    <ButtonLink className={style.projectLink} href={to}>{children}</ButtonLink>
  )
}

export default ProjectLink
