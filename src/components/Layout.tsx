import React, { FC, useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./Header"
import Aside from "./Aside"
import Footer from "./Footer"
import "./Layout.css"

const Layout: FC = ({ children }) => {
  return (
    <div className="wrapper">
      <Header className="header" />
      <main className="main">{children}</main>
      <Aside />
      <Footer className="footer" />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
