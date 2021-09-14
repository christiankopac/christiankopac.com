const path = require("path")
const _ = require("lodash")
const {
  createFilePath,
  createSchemaCustomization,
  onCreateNode,
  createRemoteFileNode,
} = require("gatsby-source-filesystem")

exports.createSchemaCustomization = ({ actions, schema }) => {
  const { createTypes } = actions
  createTypes(`
   type Mdx implements Node {
     frontmatter: Frontmatter
   }
   type Frontmatter @dontInfer {
     date: Date @dateformat,
     slug: String
     title: String,
     tags: [String],
     category: String,
     status: String,
     excerpt: String,
     embeddedImagesRemote: [File] @link(by:"url"),
     embeddedImagesLocal: [File] @fileByRelativePath
   }
 `)
}
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

exports.onCreateNode = ({
  node,
  createNodeId,
  actions: { createNode },
  cache,
  store,
}) => {
  if (
    node.internal.type === "Mdx" &&
    node.frontmatter &&
    node.frontmatter.embeddedImagesRemote
  ) {
    return Promise.all(
      node.frontmatter.embeddedImagesRemote.map(url => {
        try {
          return createRemoteFileNode({
            url,
            parentNodeId: node.id,
            createNode,
            createNodeId,
            cache,
            store,
          })
        } catch (error) {
          console.error(error)
        }
      })
    )
  }
}
