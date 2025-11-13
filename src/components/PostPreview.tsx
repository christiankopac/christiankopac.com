/** @jsxImportSource theme-ui */
import { Link } from "gatsby"
import React from "react"
import { Box, Text, jsx, useColorMode } from "theme-ui"

const PostPreview = props => {
  const [colorMode] = useColorMode()
  return (
    <Box sx={{}}>
      <Link
        to={props.post.frontmatter.slug}
        sx={{
          color: colorMode === "black" ? "background" : "text",
          textDecoration: "none",
          backgroundColor:
            colorMode === "dark" ? "rgba(59,59,59,0.2)" : "rgba(59,59,59,0.1)",
          display: "inherit",
          "&:hover": {
            backgroundColor:
              colorMode === "dark"
                ? "rgba(255,99,71,0.7)"
                : "rgba(255,99,71,0.1)",
          },
        }}
      >
        <Box
          style={{
            position: "relative",
            border: "1px solid rgba(59,59,59,0.3)",
            borderRadius: "5px",
          }}
          sx={{
            margin: "20px 0",
            padding: "0 1em 2em 2em",
            "@media screen and (max-width: 40em)": {
              padding: "10px 10px ",
            },
          }}
        >
          <h2
            style={{ marginBottom: "10px" }}
            sx={{
              "@media screen and (max-width: 40em)": {
                marginTop: "0",
                fontSize: "1",
              },
            }}
          >
            {props.post.frontmatter.title}
          </h2>
          <Text>{props.post.frontmatter.excerpt}</Text>
          {/* <p>Published on {props.post.frontmatter.date}</p> */}
          <Box
            style={{
              display: "flex",
            }}
            sx={{
              flexDirection: "row",
              "@media screen and (max-width: 40em)": {
                fontSize: "2",
                flexDirection: "column",
              },
            }}
          >
            {props.post.frontmatter.tags.map(
              (
                tag:
                  | string
                  | number
                  | boolean
                  | {}
                  | React.ReactElement<
                      any,
                      string | React.JSXElementConstructor<any>
                    >
                  | React.ReactNodeArray
                  | React.ReactPortal
                  | null
                  | undefined,
              ) => (
                <Box
                  style={{
                    textDecoration: "none",
                    textTransform: "uppercase",
                    fontFamily: "Source Code Pro",
                    color: "secondary",
                  }}
                  sx={{
                    marginTop: "2",
                    fontSize: 1,
                    "@media screen and (max-width: 40em)": {
                      padding: 0,
                      margin: 0,
                      fontSize: 0,
                    },
                  }}
                >
                  🔸 {tag}&nbsp;
                </Box>
              ),
            )}
          </Box>
        </Box>
      </Link>
    </Box>
  )
}

export default PostPreview
