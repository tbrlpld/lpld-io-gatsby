import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import './footer.module.css'

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <footer>
      © {new Date().getFullYear()}, {data.site.siteMetadata.author}
    </footer>
  )
}

export default Footer
