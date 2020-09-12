import React from 'react'
import { graphql } from 'gatsby'
import Image from 'gatsby-image'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Contact from '../components/contact'
import ProjectElement from '../components/project-element'
import ProjectImage from '../components/project-image'

import style from './index.module.css'

const IndexPage = ({ data }) => {
  const allFluidImages = data.allImages.edges.map((item) => item.node.fluid)
  const allGifURLs = data.allGifs.edges.map((item) => item.node.publicURL)

  const projectElements = data.allProjectsJson.edges.map(({ node }) => {
    const projectImage = (
      <ProjectImage
        projectName={node.fields.name}
        projectImageName={node.fields.image}
        isMacWindowScreenshot={node.fields.imageIsMacWindowScreenshot}
        allImages={allFluidImages}
        allGifURLs={allGifURLs}
        thumbnail
      />
    )
    return (
      <li key={node.id}>
        <ProjectElement
          projectName={node.fields.name}
          description={node.fields.description}
          url={node.fields.path}
          image={projectImage}
        />
      </li>
    )
  })

  return (
    <Layout>
      <SEO title='Portfolio' />
      <section className={style.welcome}>
        <div className={style.headingWrapper}>
          <h1>Hi there,</h1>
          <Image className={style.profilePicture} fluid={data.profilePicture.fluid} alt='Profile photo' />
        </div>
        <p className={style.intro}>I am Tibor. I’m a former automotive engineer on a journey to becoming a full&nbsp;stack&nbsp;developer.</p>
      </section>
      <section id='projects' className={style.projects}>
        <h2>These are things I have build before</h2>
        <ul>
          {projectElements}
        </ul>
      </section>
      <Contact />
    </Layout>
  )
}

export const query = graphql`
  query IndexPageQuery {
    profilePicture: imageSharp(fixed: {originalName: {eq: "profile.jpg"}}) {
      id
      fluid(maxWidth: 384) {
        ...GatsbyImageSharpFluid
      }
    }
    allProjectsJson {
      edges {
        node {
          id
          fields {
            name
            path
            description
            image
            imageIsMacWindowScreenshot
          }
        }
      }
    }
    allImages: allImageSharp {
      edges {
        node {
          fluid(maxWidth: 96) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    allGifs: allFile(filter: {extension: {eq: "gif"}}) {
      edges {
        node {
          id
          publicURL
          name
        }
      }
    }
  }
`

export default IndexPage
