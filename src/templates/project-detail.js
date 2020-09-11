import React from 'react'
import { graphql } from 'gatsby'

const ProjectDetailPage = ({ data }) => {
  return <h1>{data.projectsJson.fields.name}</h1>
}

export default ProjectDetailPage

export const query = graphql`
  query ProjectDetailQuery ($slug: String){
    projectsJson(fields: {slug: {eq: $slug}}) {
      fields {
        name
      }
    }
  }
`
