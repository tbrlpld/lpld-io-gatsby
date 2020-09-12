import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import style from './contact-button.module.css'

const ContactButton = () => {
  const data = useStaticQuery(graphql`
    query ContactQuery {
      site {
        siteMetadata {
          email
        }
      }
    }
  `)

  const className = 'btn large ' + style.contactBtn
  return (
    <a className={className} href={'mailto:' + data.site.siteMetadata.email}>
      <FontAwesomeIcon icon={faEnvelope} className={'fa-lg ' + style.icon} />
      Send me an email
    </a>
  )
}

export default ContactButton
