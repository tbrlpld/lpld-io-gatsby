import React from 'react'

import style from './project-element.module.css'

const ProjectElement = ({ projectName, description, url, image }) => {
  return (
    <div className={style.projectElement}>
      <a href={url} className={style.projectLink} />
      {image || null}
      <div className={style.projectData}>
        <h3 className={style.projectName}>{projectName}</h3>
        <p className={style.projectDescription}>{description}</p>
      </div>
    </div>
  )
}

export default ProjectElement
