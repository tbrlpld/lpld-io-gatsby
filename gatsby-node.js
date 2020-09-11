/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
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
