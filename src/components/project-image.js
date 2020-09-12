import React from 'react'
import PropTypes from 'prop-types'
import Image from 'gatsby-image'

import style from './project-image.module.css'

const ProjectImage = ({ projectName, projectImageName, isMacWindowScreenshot, allImages, allGifURLs }) => {
  const classNames = isMacWindowScreenshot
    ? style.projectImage
    : style.projectImage + ' ' + style.projectImageNotMacScreenshot

  const fluidImage = allImages.filter((image) => {
    return image.src.endsWith(projectImageName)
  })[0]
  if (fluidImage) {
    return <Image fluid={fluidImage} className={classNames} alt={'Screenshot of ' + projectName} />
  }

  const gif = allGifURLs.filter((gif) => {
    return gif.endsWith(projectImageName)
  })[0]
  return <img src={gif} className={classNames} alt={'Screencast of ' + projectName} />
}

ProjectImage.props = {
  projectName: PropTypes.string.isRequired,
  projectImageName: PropTypes.string.isRequired,
  allImages: PropTypes.array,
  allGifURLs: PropTypes.array,
  isMacWindowScreenshot: PropTypes.bool
}

ProjectImage.props = {
  isMacWindowScreenshot: false
}

export default ProjectImage
