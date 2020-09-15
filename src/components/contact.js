import React from 'react'

import ContactButton from './contact-button'
import SocialLinks from './social-links-list'

import style from './contact.module.css'

const Contact = (props) => {
  return (
    <div className={`${style.contact} + ${props.className}`}>
      <h2>Let's build something together</h2>
      <ContactButton className={style.contactButton} />
      <SocialLinks />
    </div>
  )
}

export default Contact
