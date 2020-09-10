import React from 'react'

import style from './contact.module.css'

const ContactButton = () => {
  return (
    <a className={style.contactBtn} href='mailto:'>Send me an email</a>
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
