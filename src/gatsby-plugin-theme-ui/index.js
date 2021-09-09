// src/gatsby-plugin-theme-ui/index.js
import { base } from "@theme-ui/presets"
const theme = {
  ...base,
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
    background: "#fff",
    primary: "#ff6347",
    secondary: "#b2b2b2",
    text: "#1b1b1b",
    muted: "#f6f6f6",
    modes: {
      dark: {
        text: "#fff",
        background: "#1b1b1b",
        active: "#444",
        primary: "#ff6347",
        secondary: "#b2b2b2",
        muted: "#f6f6f6",
      },
    },
  },
  fonts: {
    body:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: "inherit",
    monospace: "Menlo, monospace",
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96, 128],
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
    body: {
      margin: 0,
      padding: 0,
    },
    h1: {
      color: "primary",
      fontSize: ["7", "8"],
      marginTop: "-.1em",
    },
    h2: {
      color: "secondary",
      fontSize: ["5", "7"],
    },
    h3: {
      fontSize: "6",
      color: "secondary",
    },
    h4: {
      fontSize: "5",
      color: "secondary",
    },
    h5: {
      fontSize: "4",
      color: "secondary",
    },
    h6: {
      fontSize: "3",
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
      fontSize: "1.5em",
      lineHeight: "1.6em",
    },
  },
}

export default theme
