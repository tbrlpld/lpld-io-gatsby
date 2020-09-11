import React from 'react'
import PropTypes from 'prop-types'
import Image from 'gatsby-image'

import style from './project-image.module.css'

const ProjectImage = ({ projectName, imageName, isMacWindowScreenshot = false, allImages, allGifs }) => {
  const fluidImage = allImages.filter((image) => {
    return image.fluid.originalName === imageName
  })[0]

  const image = {}
  if (fluidImage) {
    image.isGif = false
    image.fluid = fluidImage.fluid
  } else {
    const gif = allGifs.filter((gif) => {
      return gif.name === imageName.slice(0, -4)
    })[0]
    image.isGif = true
    image.src = gif.publicURL
  }

  const classNames = isMacWindowScreenshot
    ? style.projectImage
    : style.projectImage + ' ' + style.projectImageNotMacScreenshot

  if (image.isGif) {
    return <img src={image.src} className={classNames} alt={'Screencast of ' + projectName} />
  } else {
    return <Image fluid={image.fluid} className={classNames} alt={'Screenshot of ' + projectName} />
  }
}

ProjectImage.props = {
  projectName: PropTypes.string.isRequired,
  imageName: PropTypes.string.isRequired,
  isMacWindowScreenshot: PropTypes.bool
}

export default ProjectImage
