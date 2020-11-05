// @jsx jsx //
import React, { FC } from "react"
import { NavLink, jsx, useColorMode } from "theme-ui"
import * as Logo from "../assets/logo.svg"
import { Link } from "gatsby"

const routes = [
  {
    href: "/blog",
    title: "blog",
  },
  {
    href: "/music",
    title: "music",
  },
  {
    href: "/now",
    title: "now",
  },
  {
    href: "/about",
    title: "about",
  },
]

const Header: FC<any> = props => {
  const [colorMode] = useColorMode()
  return (
    <header {...props}>
      <ul
        sx={{
          display: "grid",
          gridAutoFlow: "column",
          width: "100vh",
          justifyContent: "space-around",
          alignItems: "center",
          transform: "rotate(90deg) translateX(-150px) translateY(-50px)",
          transformOrigin: "bottom left",
          top: 0,
          textTransform: "uppercase",
          fontSize: "2em",
          margin: "0",
          marginTop: "2em",
          position: "fixed",
        }}
      >
        <li
          sx={{
            listStyle: "none",
            transform: "rotate(-90deg)",
            paddingTop: "0",
          }}
        >
          <Link fade to="/">
            <Logo sx={{ fill: "tomato" }} />
          </Link>
        </li>
        {routes.map(({ href, title }) => {
          return (
            <li key="title" sx={{ listStyle: "none" }}>
              <Link
                swipe
                direction="up"
                partiallyActive={true}
                activeClassName="active"
                to={href}
                sx={{
                  color: "inherit",
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
