import React, { FC } from "react"
import { Box, Button, useColorMode } from "theme-ui"
import Layout from "./Layout"

const Aside: FC = () => {
  const [colorMode, setColorMode] = useColorMode()
  return (
    <aside className="aside">
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          sx={{
            border: "none",
            backgroundColor: colorMode === "dark" ? "white" : "black",
            color: colorMode === "dark" ? "black" : "white",
            width: "60px",
            height: "60px",
            borderRadius: "60px",
            fontSize: "0.7em",
            textAlign: "center",
            margin: "0",
            position: [null, "fixed"],
            outline: "none",
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
