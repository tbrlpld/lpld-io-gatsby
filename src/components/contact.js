import React from 'react'

import style from './contact.module.css'

import ContactButton from './contact-button'
import SocialLinks from './social-links-list'

const Contact = () => {
  return (
    <section id='contact' className={style.contact}>
      <h2>Let's build something together</h2>
      <ContactButton />
      <SocialLinks />
    </section>
  )
}

export default Contact
