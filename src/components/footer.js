import React from 'react'

import './footer.module.css'

const Footer = ({ author }) => {
  return (
    <footer>
      © {new Date().getFullYear()}, {author}
    </footer>
  )
}

export default Footer
