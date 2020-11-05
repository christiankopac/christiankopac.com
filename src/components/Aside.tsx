import React, { FC } from "react"
import { Box, Button, useColorMode } from "theme-ui"
import Layout from "./Layout"

const Aside: FC = () => {
  const [colorMode, setColorMode] = useColorMode()
  return (
    <aside className="aside">
      <Box p={4} sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          sx={{
            padding: "14px",
            border: "none",
            backgroundColor: colorMode === "dark" ? "white" : "black",
            color: colorMode === "dark" ? "black" : "white",
            width: "80px",
            textAlign: "center",
            position: "fixed",
          }}
          onClick={e => {
            e.preventDefault()
            setColorMode(colorMode === "dark" ? "light" : "dark")
          }}
        >
          {colorMode} mode
        </Button>
      </Box>
    </aside>
  )
}

export default Aside
