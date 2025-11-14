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
      blog: allMdx(filter: {
        internal: { contentFilePath: { regex: "/blog/" } },
        frontmatter: { status: { ne: "draft" } }
      }) {
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
      music: allMdx(filter: {
        internal: { contentFilePath: { regex: "/music/" } },
        frontmatter: { status: { ne: "draft" } }
      }) {
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

exports.onCreateNode = async ({
  node,
  createNodeId,
  actions: { createNode },
  cache,
  store,
  reporter,
}) => {
  if (
    node.internal.type === "Mdx" &&
    node.frontmatter &&
    node.frontmatter.embeddedImagesRemote
  ) {
    try {
      const results = await Promise.allSettled(
        node.frontmatter.embeddedImagesRemote.map(async url => {
          try {
            return await createRemoteFileNode({
              url,
              parentNodeId: node.id,
              createNode,
              createNodeId,
              cache,
              store,
            })
          } catch (error) {
            reporter.warn(`Failed to fetch remote image: ${url}`)
            return null // Skip this image and continue
          }
        }),
      )
      return results.map(r => (r.status === "fulfilled" ? r.value : null)).filter(Boolean)
    } catch (error) {
      reporter.warn(`Error processing remote images for node ${node.id}`)
      return []
    }
  }
}
