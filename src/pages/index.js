import React from 'react'
import { Link, graphql } from 'gatsby'
import Image from 'gatsby-image'

import Layout from '../components/layout'
import SEO from '../components/seo'

import style from './index.module.css'

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title='Portfolio' />
    <section className={style.welcome}>
      <div className={style.headingWrapper}>
        <h1>Hi there,</h1>
        <Image className={style.profilePicture} fluid={data.profilePicture.fluid} alt='Profile photo' />
      </div>
    </section>
  </Layout>
)

export const query = graphql`
  {
    profilePicture: imageSharp(fixed: {originalName: {eq: "profile.jpg"}}) {
      id
      fluid(maxWidth: 384) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export default IndexPage
