import React, { FC } from "react"
import FullscreenModal from "./FullscreenModal"
import { Text, Link } from "theme-ui"

interface FooterProps {
  props?: any
  className?: string
}

const Footer: FC<FooterProps> = props => {
  const date = new Date()
  return (
    <footer {...props}>
      <Text sx={{ fontFamily: "monospace", fontSize: ".8em" }}>
        Christian <Link href="https://kopac.ch">Kopač</Link> &copy; {date.getFullYear()}
      </Text>
      <br />
      <FullscreenModal />
    </footer>
  )
}
export default Footer
