import React from 'react'
import { Link, graphql } from 'gatsby'
import Image from 'gatsby-image'

import Layout from '../components/layout'
import SEO from '../components/seo'

import style from './index.module.css'

const IndexPage = ({ data }) => {
  const projects = data.allProjectsJson.edges.map((project) => {
    const fluidImage = data.allImages.edges.filter((image) => {
      return image.node.fluid.originalName === project.node.Image
    })[0]

    const image = {}
    if (fluidImage) {
      image.isGif = false
      image.fluid = fluidImage.node.fluid
    } else {
      const gif = data.allGifs.edges.filter((gif) => {
        return gif.node.name === project.node.Image.slice(0, -4)
      })[0]
      image.isGif = true
      image.src = gif.node.publicURL
    }

    return {
      id: project.node.id,
      name: project.node.Name,
      description: project.node.Description,
      image: image
    }
  })

  const projectElements = projects.map((project) => {
    const image = project.image.isGif
      ? <img src={project.image.src} className={style.projectImage} alt={'Screencast of ' + project.name} />
      : <Image fluid={project.image.fluid} className={style.projectImage} alt={'Screenshot of ' + project.name} />
    return (
      <li key={project.id}>
        {image}
        <div>
          <h3>{project.name}</h3>

        </div>
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
        <p className={style.intro}>I am Tibor. I’m a former automotive engineer on a journey to becoming a full&nbsp;stack&nbsp;develper.</p>
      </section>
      <section className={style.projects}>
        <h2>These are things I have build before</h2>
        <ul>
          {projectElements}
        </ul>
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    profilePicture: imageSharp(fixed: {originalName: {eq: "profile.jpg"}}) {
      id
      fluid(maxWidth: 384) {
        ...GatsbyImageSharpFluid
      }
    }
    allImages:   allImageSharp {
      edges {
        node {
          fluid(maxWidth: 96) {
            originalName
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
    allProjectsJson {
      edges {
        node {
          Description
          Image
          Name
          id
        }
      }
    }
  }
`

export default IndexPage
