import React from 'react'

import style from './project-link.module.css'

const ProjectLink = ({ children, to }) => {
  const className = 'btn ' + style.projectLink
  return (
    <a className={className} href={to}>{children}</a>
  )
}

export default ProjectLink
