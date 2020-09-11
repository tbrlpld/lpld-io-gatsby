import React from 'react'
import { graphql } from 'gatsby'
import Image from 'gatsby-image'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Contact from '../components/contact'
import ProjectElement from '../components/project-element'

import style from './index.module.css'

const createProjectElement = (projectData) => {
  return (
    <li key={projectData.id}>
      <ProjectElement
        projectName={projectData.name}
        description={projectData.description}
        url={projectData.path}
        image={projectData.image}
        imageIsMacWindowScreenshot={projectData.imageIsMacWindowScreenshot}
      />
    </li>
  )
}

const IndexPage = ({ data }) => {
  const projects = data.allProjectsJson.edges.map((project) => {
    return {
      id: project.node.id,
      name: project.node.fields.name,
      path: project.node.fields.path,
      description: project.node.fields.description,
      image: project.node.fields.image,
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
