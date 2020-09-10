import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import style from './contact.module.css'

const ContactButton = () => {
  return (
    <a className={style.contactBtn}>
      <FontAwesomeIcon icon={faEnvelope} className={'fa-lg ' + style.icon} />
      Send me an email
    </a>
  )
}

const Contact = () => {
  return (
    <section id='contact' className={style.contact}>
      <h2>Let's build something together</h2>
      <ContactButton />
      <ul>
        <li>LinkedIn</li>
        <li>Twitter</li>
        <li>Github</li>
        <li>StackOverflow</li>
      </ul>
    </section>
  )
}

export default Contact
