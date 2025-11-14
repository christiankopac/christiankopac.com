/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

const React = require("react")
const Layout = require("./src/components/Layout").default
const { wrapRootElement: wrapWithThemeUI } = require("gatsby-plugin-theme-ui")

// Ensure theme-ui wraps the root for color mode support
exports.wrapRootElement = wrapWithThemeUI

exports.wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}
