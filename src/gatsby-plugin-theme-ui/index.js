// src/gatsby-plugin-theme-ui/index.js
import { base } from "@theme-ui/presets"
const theme = {
  ...base,
  initialColorModeName: "dark",
  useColorSchemeMediaQuery: false,
  useLocalStorage: true,
  breakpoints: ["66em", "66em"],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  links: {
    nav: {
      px: 2,
      py: 1,
      textTransform: "uppercase",
      fontFamily: "heading",
      letterSpacing: "0.2em",
    },
  },
  colors: {
    background: "#F8F9FC",
    primary: "#ff6347",
    secondary: "#b2b2b2",
    text: "#1b1b1b",
    muted: "#f6f6f6",
    modes: {
      dark: {
        text: "#F8F9FC",
        background: "#1b1b1b",
        active: "#444",
        primary: "#ff6347",
        secondary: "#b2b2b2",
        muted: "#f6f6f6",
      },
    },
  },
  fonts: {
    body: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: "inherit",
    monospace: "Menlo, monospace",
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  text: {
    caps: {
      textTransform: "uppercase",
      letterSpacing: "0.2em",
    },
    heading: {
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
    },
  },
  styles: {
    ...base.styles,
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
    },
    body: {
      margin: 0,
      padding: 0,
      backgroundColor: "background",
      color: "text",
    },
    h1: {
      color: "primary",
      fontSize: 7,
      marginTop: "-.1em",
    },
    h2: {
      color: "secondary",
      fontSize: 6,
    },
    h3: {
      fontSize: 5,
      color: "secondary",
    },
    h4: {
      fontSize: 4,
      color: "secondary",
    },
    h5: {
      fontSize: 3,
      color: "secondary",
    },
    h6: {
      fontSize: 2,
      color: "secondary",
    },
    a: {
      textDecoration: "none",
      color: "primary",
      ":hover": {
        color: "secondary",
        textDecoration: "underline",
      },
    },
    pre: {
      fontFamily: "monospace",
    },
    p: {
      fontSize: 4,
    },
    li: {
      fontSize: 4,
    },
    small: {
      fontSize: 0,
    },
    blockquote: {
      fontSize: 4,
      backgroundColor: "#eee",
      padding: "0.6em .6em",
      borderLeft: "5px solid #ff6347",
      marginLeft: "0em",
      paddingLeft: "2em",
      color: "primary",
    },
  },
}

export default theme
