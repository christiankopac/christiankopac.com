const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const _ = require('lodash')

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const blogPostTemplate = path.resolve('src/templates/template-blog-post.js')
    const portfolioItemTemplate = path.resolve(
      'src/templates/template-portfolio-item.js'
    )
    const tagTemplate = path.resolve('src/templates/template-tag-page.js')
    graphql(`
      {
        allMarkdownRemark(filter: {frontmatter: {draft: {ne: true}}}) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                tags
              }
            }
          }
        }
      }
    `).then(result => {
      if (result.errors) {
        return Promise.reject(result.errors)
      }
      const blogPosts = _.filter(result.data.allMarkdownRemark.edges,
        function (
          o
        ) {
          return _.startsWith(o.node.fields.slug, '/blog/')
        })

      const portfolioItems = _.filter(
        result.data.allMarkdownRemark.edges,
        function (o) {
          return _.startsWith(o.node.fields.slug, '/portfolio/')
        }
      )
      blogPosts.forEach(({ node }) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve(`./src/templates/template-blog-post.js`),
          context: {
            filePath: node.fields.slug,
            slug: node.fields.slug,
          },
        })
      })
      portfolioItems.forEach(({ node }) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve(`./src/templates/template-portfolio-item.js`),
          context: {
            filePath: node.fields.slug,
            slug: node.fields.slug,
          },
        })
      })
      // Create tag pages.
      let tags = []
      result.data.allMarkdownRemark.edges.forEach(edge => {
        if (_.get(edge, `node.frontmatter.tags`)) {
          tags = tags.concat(edge.node.frontmatter.tags)
        }
      })
      tags = _.uniq(tags)
      tags.forEach(tag => {
        const tagPath = `/tags/${_.kebabCase(tag)}/`
        createPage({
          path: tagPath,
          component: tagTemplate,
          context: {
            tag,
          },
        })
      })
      resolve()
    })
  })
}
