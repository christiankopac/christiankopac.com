/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

const React = require("react")
const Layout = require("./src/components/Layout").default
const { wrapRootElement: wrapWithThemeUI } = require("gatsby-plugin-theme-ui")

require("prismjs/themes/prism-solarizedlight.css")

// Ensure theme-ui wraps the root for color mode support
exports.wrapRootElement = wrapWithThemeUI

exports.wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}

// Enable prefetching on link hover
exports.onRouteUpdate = ({ location, prevLocation }) => {
  // Prefetch all links on the page when hovering
  if (typeof window !== "undefined") {
    const links = document.querySelectorAll("a[href^='/']")
    links.forEach(link => {
      link.addEventListener("mouseenter", () => {
        const href = link.getAttribute("href")
        if (href && window.___loader) {
          window.___loader.enqueue(href)
        }
      })
    })
  }
}
