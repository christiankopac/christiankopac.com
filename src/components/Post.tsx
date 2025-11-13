import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import { Heading } from "theme-ui"
import SEO from "./seo"

const PostTemplate = ({ data: { mdx }, children }) => (
  <>
    <article role="main">
      <Heading as="h1" sx={{ color: "primary", fontSize: 6 }}>
        {mdx.frontmatter.title}
      </Heading>
      {children}
    </article>
    <footer style={{ marginTop: "3em" }}>
      Published on {mdx.frontmatter.date}
    </footer>
  </>
)

export const Head = ({ data: { mdx } }) => <SEO title={mdx.frontmatter.title} />

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        date
        embeddedImagesLocal {
          childImageSharp {
            gatsbyImageData(
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
              width: 600
            )
          }
        }
        embeddedImagesRemote {
          childImageSharp {
            gatsbyImageData(
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
              width: 600
            )
          }
        }
      }
    }
  }
`
export default PostTemplate
