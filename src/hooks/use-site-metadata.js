import { useStaticQuery, graphql } from "gatsby"

export const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          titleTemplate
          description
          url
          image
          twitterUsername
        }
      }
    }
  `)

  return data.site.siteMetadata
}
