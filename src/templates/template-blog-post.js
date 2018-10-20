import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import kebabCase from 'lodash/kebabCase'

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
    <div className="blog-post">
      <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <p>Posted on: {post.frontmatter.date}</p>
      <p>Tags: {' '}
      {post.frontmatter.tags.map(tag => {
        return <Link id={tag} to={`/tags/${kebabCase(tag.fieldValue)}/`}>{tag} </Link>
        })}
      </p>
      <style jsx>{`
      .blog-post {
        padding: 0 1rem;
      }
      a:hover {
        text-decoration: underline;
        background-color: black;
      }
      `}</style>
    </div>
    </Layout>
  )
}

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        tags
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
