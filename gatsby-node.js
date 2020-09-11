/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require('path')
const slugify = require('slugify')

exports.onCreateNode = ({ node, actions, graphql }) => {
  const { createNodeField } = actions
  if (node.internal.type === 'ProjectsJson') {
    const slug = slugify(node.name).toLowerCase()
    createNodeField({
      node,
      name: 'slug',
      value: slug
    })

    createNodeField({
      node,
      name: 'name',
      value: node.name
    })

    createNodeField({
      node,
      name: 'description',
      value: node.description
    })

    createNodeField({
      node,
      name: 'extendedDescription',
      value: node.extendedDescription
    })

    createNodeField({
      node,
      name: 'image',
      value: node.image
    })

    createNodeField({
      node,
      name: 'imageIsMacWindowScreenshot',
      value: node.imageIsMacWindowScreenshot
    })

    createNodeField({
      node,
      name: 'live',
      value: node.live
    })

    createNodeField({
      node,
      name: 'github',
      value: node.github
    })

    createNodeField({
      node,
      name: 'technologies',
      value: node.technologies.split(',').map((item) => item.toLowerCase())
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query MyQuery {
      allProjectsJson {
        nodes {
          id
          fields {
            name
            slug
          }
        }
      }
    }
  `)

  result.data.allProjectsJson.nodes.forEach((node) => {
    console.log(node.fields.slug)
    createPage({
      path: node.fields.slug,
      component: path.resolve('./src/templates/project-detail.js'),
      context: {
        slug: node.fields.slug
      }
    })
  })
}
