/// @jsx jsx
import { Link } from "gatsby"
import React from "react"
import { Box, Text, jsx, useColorMode } from "theme-ui"

const PostPreview = props => {
  const [colorMode] = useColorMode()
  return (
    <Link
      to={props.post.frontmatter.slug}
      sx={{
        color: colorMode === "black" ? "background" : "text",
        textDecoration: "none",
      }}
    >
      <Box
        style={{
          border: "1px solid #333",
          margin: "20px 0",
          padding: "0 1em 2em 2em",
        }}
      >
        <h2 style={{ marginBottom: "10px" }}>{props.post.frontmatter.title}</h2>
        <Text>{props.post.frontmatter.excerpt}</Text>
        <p>Published on {props.post.frontmatter.date}</p>
        <Box
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          {props.post.frontmatter.tags.map(tag => (
            <Box
              style={{
                textDecoration: "none",
                flexDirection: "row",
                border: "1px solid #b2b2b2",
                borderRadius: "5px",
                fontFamily: "monospace",
                fontSize: "1em",
                opacity: "0.6",
                padding: "10px",
                margin: "0 3px",
                color: "#ff6347",
              }}
            >
              {tag}
            </Box>
          ))}
        </Box>
      </Box>
    </Link>
  )
}

export default PostPreview
