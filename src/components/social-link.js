import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './social-link.module.css'

const SocialIconLink = ({ icon, url, label }) => {
  return (
    <a href={url} aria-label={label} target='_blank' rel='noopener noreferrer'>
      <FontAwesomeIcon icon={icon} />
    </a>
  )
}

SocialIconLink.propTypes = {
  icon: PropTypes.object.isRequired,
  url: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
}

export default SocialIconLink
