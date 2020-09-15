import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import ButtonLink from './button-link'

import style from './contact-button.module.css'

const ContactButton = (props) => {
  const data = useStaticQuery(graphql`
    query ContactQuery {
      site {
        siteMetadata {
          email
        }
      }
    }
  `)

  return (
    <ButtonLink className={props.className} href={'mailto:' + data.site.siteMetadata.email} large>
      <FontAwesomeIcon icon={faEnvelope} className={`fa-lg ${style.icon}`} />
      Send me an email
    </ButtonLink>
  )
}

export default ContactButton
