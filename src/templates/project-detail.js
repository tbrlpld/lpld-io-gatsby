import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import ProjectImage from '../components/project-image'
import ProjectLink from '../components/project-link'

import style from './project-detail.module.css'

const ProjectDetailPage = ({ data }) => {
  const project = data.projectsJson.fields
  const allFluidImages = data.allImages.edges.map((item) => item.node.fluid)
  const allGifURLs = data.allGifURLs.edges.map((item) => item.node.publicURL)

  return (
    <Layout>
      <section className={style.project}>
        <h1>{project.name}</h1>
        <p className={style.description}>{project.description}</p>
        <div className={style.imageWrapper}>
          <ProjectImage
            projectName={project.name}
            projectImageName={project.image}
            isMacWindowScreenshot={project.imageIsMacWindowScreenshot}
            allImages={allFluidImages}
            allGifURLs={allGifURLs}
          />
        </div>
        <div className={style.links} style={{ justifyContent: (project.github && project.live) ? 'space-between' : 'center' }}>
          {project.github ? <ProjectLink to={project.github}>See the code</ProjectLink> : null}
          {project.live ? <ProjectLink to={project.live}>See it live</ProjectLink> : null}
        </div>
        <p className={style.extendedDescription}>{project.extendedDescription}</p>
      </section>
    </Layout>
  )
}

export default ProjectDetailPage

export const query = graphql`
  query ProjectDetailQuery ($slug: String){
    projectsJson(fields: {slug: {eq: $slug}}) {
      fields {
        name
        description
        extendedDescription
        image
        imageIsMacWindowScreenshot
        github
        live
      }
    }
    allImages: allImageSharp {
      edges {
        node {
          fluid(maxWidth: 384) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    allGifURLs: allFile(filter: {extension: {eq: "gif"}, relativeDirectory: {eq: "project-images"}}) {
      edges {
        node {
          publicURL
        }
      }
    }
  }
`
