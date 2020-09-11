/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const slugify = require('slugify')

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === 'ProjectsJson') {
    const slug = slugify(node.Name).toLowerCase()
    createNodeField({
      node,
      name: 'slug',
      value: slug
    })

    createNodeField({
      node,
      name: 'name',
      value: node.Name
    })

    createNodeField({
      node,
      name: 'description',
      value: node.Description
    })
  }
}
