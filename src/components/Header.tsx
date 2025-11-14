/** @jsxImportSource theme-ui */
import React, { FC } from "react"
import { jsx, useColorMode } from "theme-ui"
import * as Logo from "../assets/logo.svg"
import { Link } from "gatsby"

const routes = [
  {
    href: "/about",
    title: "about",
  },
  {
    href: "/music",
    title: "music",
  },
  {
    href: "/blog",
    title: "blog",
  },
  {
    href: "/now",
    title: "now",
  },
]

const Header: FC<any> = props => {
  const [colorMode] = useColorMode()
  return (
    <header
      {...props}
      sx={{
        padding: ["1em", null],
        marginTop: [null, "1em"],
        position: [null, "fixed"],
      }}
    >
      <ul
        sx={{
          display: ["flex", "grid"],
          flexWrap: ["wrap", null],
          gridAutoFlow: [null, "column"],
          width: ["100%", "100vh"],
          justifyContent: ["space-between", "space-evenly"],
          paddingTop: [null, "2em"],
          fontSize: ["1.5em", "2em"],
          paddingLeft: 0,
          transform: [
            "rotate(0)",
            "rotate(90deg) translateX(-214px) translateY(0)",
          ],
          transformOrigin: [null, "bottom left"],
          alignItems: "center",
          textTransform: "uppercase",
        }}
      >
        <li
          sx={{
            width: ["100%", "100%", null],
            transform: ["rotate(0)", "rotate(-90deg)"],
            listStyle: "none",
            marginBottom: ["2em", 0],
            paddingTop: "0",
          }}
        >
          <Link fade to="/">
            <Logo sx={{ fill: "tomato" }} />
          </Link>
        </li>
        {routes.map(({ href, title }) => {
          return (
            <li key={title} sx={{ listStyle: "none" }}>
              <Link
                partiallyActive={true}
                activeClassName="active"
                to={href}
                sx={{
                  textDecoration: "none",
                  color: "inherit",
                  "&:hover": {
                    color: "secondary",
                  },
                  "&.active": {
                    color: "primary",
                  },
                }}
              >
                {title}
              </Link>
            </li>
          )
        })}
      </ul>
    </header>
  )
}

export default Header
