# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## Guiding Principles

- Changelogs are for humans, not machines.
- There should be an entry for every single version.
- The same types of changes should be grouped.
- Versions and sections should be linkable.
- The latest version comes first.
- The release date of each version is displayed.
- Mention whether you follow Semantic Versioning.

## Types of changes

- _Added_ for new features.
- _Changed_ for changes in existing functionality.
- _Deprecated_ for soon-to-be removed features.
- _Removed_ for now removed features.
- _Fixed_ for any bug fixes.
- _Security_ in case of vulnerabilities.

## [Unreleased]

- Fontpair: Work Sans / Bitter
- Favicon
- Sitemap
- Analytics
- Portfolio List
- Google fonts causing problems?!
  - // "gatsby-plugin-prefetch-google-fonts": "^1.0.11",

    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Work Sans`,
          },
          {
            family: `Bitter`,
          },
        ],
      },
    },

```
query portfolio {
  allFile(sort: {order: DESC, fields: [name]}, filter: {internal: {mediaType: {eq: "text/markdown"}}, sourceInstanceName: {eq: "portfolio"}}) {
    edges {
      node {
        sourceInstanceName
        childMarkdownRemark {
          excerpt(pruneLength: 250)
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
}

```

- Portfolio Single
- Blog List

```
query blogQuery {
  allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, filter: {fileAbsolutePath: {regex: "/(/content/blog)/.*\\.md$/"}}) {
    edges {
      node {
        frontmatter {
          date
          tags
          title
        }
      }
    }
  }
}
```

- Blog Single
- About
- CV

## 0.0.1 - 2018-10-16

### Added

- This CHANGELOG file to hopefully serve as an evolving example of a
  standardized open source project CHANGELOG.
- `gatsby-plugin-styled-jsx` + `styled-jsx`
- `gatsby-plugin-prefetch-google-fonts`
  - Work Sans and Bitter font families
- `gatsby-plugin-react-helmet react-helmet`
- `gatsby-plugin-react-svg`
- `gatsby-transformer-remark gatsby-remark-prismjs prismjs`
- `gatsby-plugin-sitemap`
- `gatsby-plugin-prismjs`
- `gatsby-remark-emojis`
- `gatsby-source-filesystem`

[unreleased]: https://github.com/olivierlacan/keep-a-changelog/compare/v1.0.0...HEAD
[0.0.2]: https://github.com/olivierlacan/keep-a-changelog/compare/v0.0.1...v0.0.2
