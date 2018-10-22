import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import _ from 'lodash'

export default ({ data, location }) => {
  return (
    <Layout>
      <h1 className="section-title">Portfolio</h1>
      <section className="portfolio-list">
      <h4>{data.allMarkdownRemark.totalCount} Items</h4>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <article key={node.id} className="article {this.state.active ? 'active' :''}">
          <div className="content">
                <h1>
            <Link to={node.fields.slug}>
                  {node.frontmatter.title}
            </Link>
                </h1>
            <ul className="tags">
                {node.frontmatter.tags.map((tag) => (
                  <li key={tag}>
                    <Link to={`tags/${_.kebabCase(tag)}`}>
                    {tag}
                    </Link>
                  </li>
                ))}
            </ul>
            {/* {node.excerpt} */}
          </div>
        </article>
        ))}
        </section>
        <style jsx>
        {`
        h4 {
          padding-left: 1rem;
        }
          `}</style>
            <style jsx global>{`
    .section-title {
      text-align: center;
    }
    .portfolio-list {
      min-width: 100%;
      display: flex;
      flex-direction: column;
    }
    @media screen and (max-width: 300) {
      .main {
        width: 100%
      }
    }
    @media screen and (max-width: 900px) {
      .main {
        width: 100%
      }
    }
    @media screen and (min-width: 900px) {
      .article {
        width: 750px;
      }
    }
    // multiples of 1 (1n+0)
    .article:nth-of-type(1n+0) {
      background-color: #FF00A8;
    }

    // multiples of 2
    .article:nth-of-type(2n+0) {
      background-color: #00FF66;
      color: white;
    }
    // multiples of 3
    .article:nth-of-type(3n+0) {
      background-color: #FFE600;
    }
    .article:nth-of-type(2n+0) h1,
    .article:nth-of-type(2n+0) .tags a {
      color: white;
    }
    .article {
      padding: 2rem 0;
      display: grid;
      grid-row: 1fr;
      grid-column: 1fr;
    }
    .article .content {
      max-width: 750px;
      padding: 0 1rem;
    }
    .article h1 {
      padding-bottom: 1rem;
      margin: 0;
      font-size: 1.6rem;
      font-family: 'Work Sans', sans-serif;
      color: black;
    }
    .article h1 a:hover ,
    .article .tags a:hover {
    text-decoration: none;
    color: #00FF57;
    background-color: black
    }
    .tags {
      list-style: none;
      display: inline;
      padding-left: 0;
    }
    .tags li {
      font-size: 1rem;
      float: left;
      padding-right: 10px;
    }
    .tags li a {
      font-size: 1rem;
      color: white;
      font-family: 'Work Sans', sans-serif;
    }
  `}
        </style>
    </Layout>
  )
}

export const query = graphql`
  query portfolioQuery {
    allMarkdownRemark(filter: {
      fileAbsolutePath: { regex: "/portfolio/" }
      frontmatter: {draft: {ne: true} }
      }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            tags
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
