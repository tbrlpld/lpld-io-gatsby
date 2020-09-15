import React from 'react'
import { Link } from 'gatsby'

import style from './project-element.module.css'

const ProjectElement = ({ projectName, description, url, image }) => {
  return (
    <div className={style.projectElement}>

      {image || null}
      <div className={style.projectData}>
        <Link href={url} className={style.projectLink}>
          <h3 className={style.projectName}>{projectName}</h3>
        </Link>
        <p className={style.projectDescription}>{description}</p>
      </div>
    </div>
  )
}

export default ProjectElement
