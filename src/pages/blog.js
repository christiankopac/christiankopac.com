import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import _ from 'lodash'

export default ({ data }) => {
  const getDayFromDate = (date) => {
    return _.split(date, '-')
  }
  return (
    <Layout>
      <div className='blog'>
      <h1 className="blog-title">Blog</h1>
      <h4 className="blog-subtitle">{data.allMarkdownRemark.totalCount} Posts</h4>
      <section className="blog-list">
        {data.allMarkdownRemark.edges.map(({ node, index }) => (
          <article key={`post-${node.id}`} className="article {this.state.active ? 'active' :''}">
            <time className="pubdate" pubdate="true" dateTime="2018-10-10">
              <div className="pubdate__day">{getDayFromDate(node.frontmatter.date)[0]}</div>
              <div className="pubdate__month">{getDayFromDate(node.frontmatter.date)[1].substring(0, 3)}</div>
              <div className="pubdate__year">{getDayFromDate(node.frontmatter.date)[2]}</div>
            </time>
            <div className="content">
              <h1>
                <Link to={node.fields.slug}>
                  {node.frontmatter.title}
                </Link>
              </h1>
              <ul className="tags">
                {node.frontmatter.tags.map((tag, index) => (
                  <li key={`tag-${index}`}>
                    <Link className="tags-link" to={`tags/${_.kebabCase(tag)}`}>
                      #{tag}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>
      <style jsx global>{`

                  .article {
                    max-widht: 750px;
                    display: grid;
                    grid-template-columns: 1fr 6fr;
                    grid-template-rows: 1fr;
                    grid-template-areas: "date content";
                    border: 2px solid black;
                  }
                  .article p {
                    line-height: 1.6rem;
                  }
                  .blog-title {
                    text-align: center;
                  }
                  .blog-subtitle {
                    padding-left: 1rem;
                  }
                  .pubdate {
                    font-family: 'Work Sans', sans-serif;
                    grid-area: "date";
                    background-color: black;
                    color: white;
                    text-align: center;
                    justify-content: space-around;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    height: 100%;
                    min-width: 100px;
                  }
                  .pubdate__day {
                    color: white;
                    font-size: 4.8rem;
                    padding-top: 0.666rem;
                    width: 100%;
                    line-height: 3.2rem;
                  }
                  .pubdate__month {
                    font-size: 2.4rem;
                    width: 100%;
                    text-transform: uppercase;
                  }
                  .pubdate__year {
                    width: 100%;
                    font-size: 1.8rem;
                    line-height: 1.7rem;
                    padding-bottom: 0.666rem;
                  }
                  .article .content {
                    padding: 1rem;
                    grid-area: content;
                  }
                  article h1 {
                    font-size: 1.6rem;
                    font-family: 'Work Sans', sans-serif;
                    color: black;
                  }
                  .tags {
                    list-style: none;
                    display: inline;
                    padding-left: 0;
                  }
                  .tags a {
                    color: #00ff57;
                  }

                  .tags li {
                    font-family: 'Work Sans', sans-serif;
                    font-size: 1rem;
                    float: left;
                    padding-right: 10px;
                  }
                  .tags li a:hover {
                    color: #00FF57;
                    background-color: black;
                  }
        `}
        </style>
        </div>
    </Layout>
  )
}

export const query = graphql`
  query blogQuery {
    allMarkdownRemark(filter: {
      fileAbsolutePath: { regex: "/blog/" }
      frontmatter: {draft: {ne: true} }
      }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            tags
            date(formatString: "DD-MMMM-YYYY")
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
