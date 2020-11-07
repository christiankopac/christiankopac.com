import React, { FC, useState } from "react"
import { Flipper, Flipped } from "react-flip-toolkit"
import { Flex, Box, Heading } from "theme-ui"

import "./FullscreenModal.css"

const FullscreenModal: FC = props => {
  const [fullScreen, setFullScreen] = useState(false)
  const toggleFullScreen = () => setFullScreen(prevState => !prevState)
  return (
    <Flipper flipKey={fullScreen} spring={{ stiffness: 280, damping: 22 }}>
      <Flipped flipId="square">
        <div
          onClick={toggleFullScreen}
          className={fullScreen ? "fullscreen" : "normal"}
        >
          ?
          {fullScreen && (
            <Flex className="fullscreen">
              <Box>
                <Heading as="h1" sx={{ color: "white", fontSize: "4em" }}>
                  BLACK LIVES MATTER
                </Heading>
                <br />
              </Box>
            </Flex>
          )}
        </div>
      </Flipped>
    </Flipper>
  )
}
export default FullscreenModal
