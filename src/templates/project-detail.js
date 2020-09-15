import React from 'react'
import { graphql } from 'gatsby'

import Contact from '../components/contact'
import Layout from '../components/layout'
import ProjectImage from '../components/project-image'
import ProjectLink from '../components/project-link'
import SEO from '../components/seo'
import TechPill from '../components/tech-pill'

import style from './project-detail.module.css'

const ProjectDetailPage = ({ data }) => {
  const project = data.projectsJson.fields
  const allFluidImages = data.allImages.edges.map((item) => item.node.fluid)
  const allGifURLs = data.allGifURLs.edges.map((item) => item.node.publicURL)

  const techPills = project.technologies.map((tech, index) => {
    return (
      <TechPill name={tech} key={index} />
    )
  })

  return (
    <Layout>
      <SEO title={project.name} description={project.description} />
      <section className={style.project}>
        <h1>{project.name}</h1>
        <p className={style.description}>{project.description}</p>
        <div className={style.dataWrapper}>
          <div className={style.imageWrapper}>
            <ProjectImage
              projectName={project.name}
              projectImageName={project.image}
              isMacWindowScreenshot={project.imageIsMacWindowScreenshot}
              allImages={allFluidImages}
              allGifURLs={allGifURLs}
            />
          </div>
          <div className={style.linksAndExtendedDescriptionWrapper}>
            <div className={`${style.links} ` + ((project.github && project.live) ? style.multipleLinks : style.singleLink)}>
              {
                project.github
                  ? <div className={style.projectLinkWrapper}><ProjectLink to={project.github} className={style.projectLink}>See the code</ProjectLink></div>
                  : null
              }
              {
                project.live
                  ? <div className={style.projectLinkWrapper}><ProjectLink to={project.live} className={style.projectLink}>See it live</ProjectLink></div>
                  : null
              }
            </div>
            <p className={style.extendedDescription}>{project.extendedDescription}</p>
          </div>
        </div>
        <div className={style.techPillsContainer}>
          {techPills}
        </div>
      </section>
      <section id='contact' className={style.contact}>
        <Contact />
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
        technologies
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
