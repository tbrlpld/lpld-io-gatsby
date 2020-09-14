import React from 'react'

import style from './project-element.module.css'

const ProjectElement = ({ projectName, description, url, image }) => {
  return (
    <div className={style.projectElement}>

      {image || null}
      <div className={style.projectData}>
        <a href={url} className={style.projectLink}>
          <h3 className={style.projectName}>{projectName}</h3>
        </a>
        <p className={style.projectDescription}>{description}</p>
      </div>
    </div>
  )
}

export default ProjectElement
