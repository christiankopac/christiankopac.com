import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Menu from './menu'
import Footer from './footer'
import Logo from '../assets/cdk-logo.svg'
class Layout extends React.Component {
  render() {
    return (
      <div className="container">

        <Helmet>
          <title>Christian Kopač - JS Developer</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.min.css" />
          <link rel="icon" type="image/x-icon" href="/static/favicon.ico" />
        </Helmet>

        <main>
          {this.props.children}
        </main>

        <Menu />
        <Footer />

        <style jsx>{`
          p,
          a {
            font-family: 'Merriweather', sans-serif;
            font-size: 1.4rem;
          }
        `}</style>
        <style jsx global>
          {`
            h1,
            h2,
            h3,
            h4,
            h5,
            h6,
            .menu a,
            .menu p,
            h1 > a, h2 > a, h3 > a, h4 > a {
              color: black;
              font-family: 'Work Sans', sans-serif;
            }
            h1 > a:hover {
              color: white;
            }
            p {
              font-family: 'Merriweather', serif;
              line-height: 1.7rem;
              font-size: 1rem;
            }
            a {
              text-decoration: none;
              color: #00FF57;
            }
            main a:hover {
              background-color: black;
            }
            .container {
              min-height: 100vh;
              display: grid;
              grid-gap: 5px;
              grid-template-columns: 1fr;
              grid-template-rows: 10vh 1fr 5vh 5vh;
              grid-template-areas:
                'header'
                'main'
                'section'
                'nav'
                'footer';
            }
            main {
              max-width: 750px;
              margin: 0 auto;
              grid-area: main;
              display: flex;
              flex-direction: column;
              justify-content: center;
            }
            strong {
              color:  #00FF57
            }
            .back {
              font-size: 1.3rem;
            }
            .back:hover {
              background-color: black;
            }


          `}
        </style>
      </div>
    )
  }
}
export default Layout