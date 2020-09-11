import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'

import style from './project-detail.module.css'

const ProjectDetailPage = ({ data }) => {
  const project = data.projectsJson.fields
  return (
    <Layout>
      <section className={style.project}>
        <h1>{project.name}</h1>
        <p className={style.description}>{project.description}</p>
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
      }
    }
  }
`
