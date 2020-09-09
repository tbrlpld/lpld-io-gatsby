import React from 'react'

import './footer.module.css'

const Footer = ({ author }) => {
  return (
    <footer>
      <div>
        © {new Date().getFullYear()}, {author}
      </div>
    </footer>
  )
}

export default Footer
