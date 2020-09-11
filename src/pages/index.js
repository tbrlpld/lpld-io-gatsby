import React from 'react'
import { graphql } from 'gatsby'
import Image from 'gatsby-image'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Contact from '../components/contact'

import style from './index.module.css'

const getFluidOrGif = ({ imageName, allImages, allGifs }) => {
  const fluidImage = allImages.filter((image) => {
    return image.fluid.originalName === imageName
  })[0]

  const image = {}
  if (fluidImage) {
    image.isGif = false
    image.fluid = fluidImage.fluid
  } else {
    const gif = allGifs.filter((gif) => {
      return gif.name === imageName.slice(0, -4)
    })[0]
    image.isGif = true
    image.src = gif.publicURL
  }
  return image
}

const createProjectElement = (projectData) => {
  const classNames = projectData.imageIsMacWindowScreenshot
    ? style.projectImage : style.projectImage + ' ' + style.projectImageNotMacScreenshot

  const image = projectData.image.isGif
    ? <img src={projectData.image.src} className={classNames} alt={'Screencast of ' + projectData.name} />
    : <Image fluid={projectData.image.fluid} className={classNames} alt={'Screenshot of ' + projectData.name} />

  return (
    <li key={projectData.id}>
      {image}
      <div className={style.projectData}>
        <a href={projectData.path}><h3 className={style.projectName}>{projectData.name}</h3></a>
        <p className={style.projectDescription}>{projectData.description}</p>
      </div>
    </li>
  )
}

const IndexPage = ({ data }) => {
  const allImages = data.allImages.edges.map((item) => item.node)
  const allGifs = data.allGifs.edges.map((item) => item.node)

  const projects = data.allProjectsJson.edges.map((project) => {
    const image = getFluidOrGif({
      imageName: project.node.fields.image,
      allImages: allImages,
      allGifs: allGifs
    })

    return {
      id: project.node.id,
      name: project.node.fields.name,
      path: project.node.fields.path,
      description: project.node.fields.description,
      image: image,
      imageIsMacWindowScreenshot: project.node.fields.imageIsMacWindowScreenshot
    }
  })

  const projectElements = projects.map(createProjectElement)

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
  }
`

export default IndexPage
