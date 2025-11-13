/** @jsxImportSource theme-ui */
import React from "react"

import { Heading, Text, jsx } from "theme-ui"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <>
    <Heading as="h1" sx={{ fontSize: "8em" }}>
      404: Not Found
    </Heading>
    <Text>You just hit a route that doesn&#39;t exist... the sadness.</Text>
  </>
)

export default NotFoundPage

export const Head = () => <SEO title="404: Not found" />
