import React from 'react'
import PropTypes from 'prop-types'
import Image from 'gatsby-image'

import style from './project-image.module.css'

const ProjectImage = ({ projectName, projectImageName, isMacWindowScreenshot, allImages, allGifURLs, thumbnail }) => {
  let classNames = style.projectImage
  if (!isMacWindowScreenshot) { classNames += ' ' + style.notMacScreenshot }
  if (thumbnail) { classNames += ' ' + style.thumbnail }

  const fluidImage = allImages.filter((image) => {
    return image.src.endsWith(projectImageName)
  })[0]
  if (fluidImage) {
    return <Image fluid={fluidImage} className={classNames} alt={'Screenshot of ' + projectName} />
  }

  const gif = allGifURLs.filter((gif) => {
    return gif.endsWith(projectImageName)
  })[0]
  if (gif) {
    return <img src={gif} className={classNames} alt={'Screencast of ' + projectName} />
  }
}

ProjectImage.props = {
  projectName: PropTypes.string.isRequired,
  projectImageName: PropTypes.string.isRequired,
  allImages: PropTypes.array,
  allGifURLs: PropTypes.array,
  isMacWindowScreenshot: PropTypes.bool,
  thumbnail: PropTypes.bool
}

ProjectImage.defaultProps = {
  isMacWindowScreenshot: false,
  thumbnail: false
}

export default ProjectImage
