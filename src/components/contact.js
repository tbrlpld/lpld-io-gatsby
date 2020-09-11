import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { faLinkedin, faTwitter, faGithub, faStackOverflow } from '@fortawesome/free-brands-svg-icons'

import style from './contact.module.css'

import ContactButton from './contact-button'
import SocialLinkIcon from './social-link'

const Contact = () => {
  const data = useStaticQuery(graphql`
    query SocialLinksQuery {
      site {
        siteMetadata {
          socialLinks {
            linkedin
            twitter
            github
            stackoverflow
          }
        }
      }
    }
  `)
  const icons = {
    linkedin: faLinkedin,
    twitter: faTwitter,
    github: faGithub,
    stackoverflow: faStackOverflow
  }
  const socialLinks = data.site.siteMetadata.socialLinks
  const socialLinkElements = Object.keys(socialLinks).map((social) => {
    const url = socialLinks[social]
    if (url) {
      return (
        <li>
          <SocialLinkIcon icon={icons[social]} label={social} url={url} />
        </li>
      )
    } else {
      return null
    }
  })

  return (
    <section id='contact' className={style.contact}>
      <h2>Let's build something together</h2>
      <ContactButton />
      <ul className={style.socialLinksList}>
        {socialLinkElements}
      </ul>
    </section>
  )
}

export default Contact
