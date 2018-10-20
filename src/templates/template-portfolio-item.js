import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <div className="portfolio-item">
      <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <Link className="back" to="/portfolio">Back to portfolio</Link>
      </div>
      <style jsx>{`
        .portfolio-item {
          padding: 0 1rem;
        }
      `}</style>
    </Layout>
  )
}

export const query = graphql`
  query PortfolioItemQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
