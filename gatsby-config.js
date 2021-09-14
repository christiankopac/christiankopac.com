module.exports = {
  siteMetadata: {
    title: `Christian Kopač - Code & Music`,
    description: `My personal writings on code, music and more. JavaScript and TypeScript.`,
    author: `@christiankopac`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/content/blog/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `music`,
        path: `${__dirname}/content/music/`,
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },
    // {
    //   resolve: `gatsby-transformer-mdx-content-pages`,
    //   options: {
    //     sourceInstanceName: `blog`,
    //     defaultTemplate: `post`,
    //   },
    // },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve(`./src/components/Layout.tsx`),
        },
        extensions: [".mdx", ".md"],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-plugin-theme-ui`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/, // See below to configure properly
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          quality: 80,
          backgroundColor: `transparent`,
          formats: ["auto", "webp", "avif"],
          placeholder: "blurred",
          tracedSVGOptions: {},
          blurredOptions: {},
          jpgOptions: {},
          pngOptions: {},
          webpOptions: {},
          avifOptions: {},
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Christian Kopac's personal website`,
        short_name: `CK`,
        start_url: `/`,
        background_color: `#1b1b1b`,
        theme_color: `#F56542`,
        display: `minimal-ui`,
        icon: `src/images/ck-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-image`,
  ],
}
