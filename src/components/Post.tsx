import React from "react"
import { graphql, StaticQuery } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import PropTypes from "prop-types"
const shortcodes = { Link }
import { useTransition, animated } from "react-spring"
import { Heading } from "theme-ui"

const PostTemplate = ({ data: { mdx } }) => (
  <Layout>
    <article role="main">
      <Heading as="h1" sx={{ color: "primary", fontSize: 6 }}>
        {mdx.frontmatter.title}
      </Heading>
      <MDXProvider components={shortcodes}>
        <MDXRenderer>{mdx.body}</MDXRenderer>
      </MDXProvider>
      <footer>Published on {mdx.frontmatter.date}</footer>
    </article>
  </Layout>
)

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        date
      }
    }
  }
`
export default PostTemplate
