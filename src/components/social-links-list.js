import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { faLinkedin, faTwitter, faGithub, faStackOverflow } from '@fortawesome/free-brands-svg-icons'

import SocialLinkIcon from './social-link'

import style from './social-links-list.module.css'

const SocialLinks = () => {
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
        <li key={social}>
          <SocialLinkIcon icon={icons[social]} label={social} url={url} />
        </li>
      )
    } else {
      return null
    }
  })

  return (
    <ul className={style.socialLinksList}>
      {socialLinkElements}
    </ul>
  )
}

export default SocialLinks
