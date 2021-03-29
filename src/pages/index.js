import React from 'react'
import Logo from '../assets/cdk-logo.svg'
import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <span className="logo">
      <Logo />
    </span>
    <p>Hi! I'm <strong>Christian Kopač</strong>,</p>
    <p>Web Developer from Buenos Aires based in Berlin.</p>
    <style jsx>
      {`
        .logo {
          width: 200px;
          margin: 0 auto;
          padding-bottom: 2rem;
        }
        p {
          text-align: center;
        }
      `}
    </style>
  </Layout>
)

export default IndexPage
