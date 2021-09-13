const path = require("path")
const _ = require("lodash")
const { createFilePath } = require("gatsby-source-filesystem")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve("src/components/Post.tsx")
  const musicPostTemplate = path.resolve("src/components/Post.tsx")

  return graphql(`
    {
      blog: allMdx(filter: { fileAbsolutePath: { regex: "/blog/" } }) {
        edges {
          node {
            id
            frontmatter {
              slug
              category
            }
          }
        }
      }
      music: allMdx(filter: { fileAbsolutePath: { regex: "/music/" } }) {
        edges {
          node {
            id
            frontmatter {
              slug
              category
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
    }
    result.data.blog.edges.forEach(({ node }) => {
      createPage({
        path: `${node.frontmatter.category}/${node.frontmatter.slug}`,
        component: blogPostTemplate,
        context: { id: node.id },
      })
    })
    result.data.music.edges.forEach(({ node }) => {
      createPage({
        path: `${node.frontmatter.category}/${node.frontmatter.slug}`,
        component: musicPostTemplate,
        context: { id: node.id },
      })
    })
  })
}
