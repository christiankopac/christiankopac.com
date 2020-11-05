import React, { FC } from "react"
import FullscreenModal from "./FullscreenModal"
import { Text } from "theme-ui"

interface FooterProps {
  props?: any
  className?: string
}

const Footer: FC<FooterProps> = props => {
  const date = new Date()
  return (
    <footer {...props}>
      <Text sx={{ fontFamily: "monospace", fontSize: ".8em" }}>
        Christian Kopač &copy; {date.getFullYear()}
      </Text>
      <br />
      <FullscreenModal>
        <em>?</em>
      </FullscreenModal>
    </footer>
  )
}
export default Footer
