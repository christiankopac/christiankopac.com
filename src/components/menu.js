import React from 'react'
import { Link } from 'gatsby'
import Logo from '../assets/cdk-logo.svg'

class Menu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isMenuOpen: false,
      styles: {
        top: 0,
      },
    }
  }
  render() {
    const handleNavClick = e => {
      e.preventDefault()
      e.stopPropagation()
      const bodyRect = document.body.getBoundingClientRect()
      const elemRect = document
        .getElementById('menu-button')
        .getBoundingClientRect()
      const offset = elemRect.top - bodyRect.top - 140
      this.setState({
        styles: {
          top: offset,
        },
        isMenuOpen: !this.state.isMenuOpen,
      })
    }
    return (
      <React.Fragment>
      <aside className="menu">
        <nav className="nav">
          <a href="mailto:hello@christiankopac.com">contact</a>
          <span className="menu-logo"><Link to="/"><Logo /></Link></span>
          <a id="menu-button" onClick={handleNavClick}>menu</a>
        </nav>
      </aside>
      {this.state.isMenuOpen ? (
          <div id="popover-menu" style={this.state.styles}>
            <Link to="/about">about</Link>
            <Link to="/blog">blog</Link>
            <Link to="/portfolio">portfolio</Link>
          </div>
          ) : ('')
        }
        <style jsx>{`
                    .menu {
                      grid-area: nav;
                      align-self: center;
                      padding: 0.6rem 1rem;
                      text-align: center;
                    }
                    .nav {
                      display: flex;
                      justify-content: space-between;
                      padding-bottom: 3rem;
                    }
                    .nav > a {
                      font-size: 1.3rem;
                      font-weight: 700;
                      color: #00FF57;
                    }
                    .menu-logo {
                      color: black;
                      width: 32px;
                      height: 32px;
                    }
                    #menu-button {
                      border: none;
                      cursor: pointer;
                      background: none;
                    }
                    #menu-button:focus {
                      outline:0;
                    }
                    #popover-menu {
                      cursor: pointer;
                      display: flex;
                      flex-direction: column;
                      background-color: white;
                      border-radius: 5px;
                      width: 8rem;
                      text-align: center;
                      grid-area: section;
                      position: absolute;
                      right: 1rem;
                      box-shadow: 2px 2px 2px #a2a2a2;
                    }
        `}
        </style>
        <style jsx global>{`
                           a:hover svg #letter-c,
                           a:hover svg #letter-k {
                            fill: #00ff57 !important;
                          }
                            #popover-menu a {
                              font-size: 1.3rem;

                              color: black;
                              font-family: 'Work Sans', sans-serif;
                              padding: 0.5rem 1rem;
                            }
                            #popover-menu a:hover {
                              color: #00FF57;
                            }

        `}</style>
      </React.Fragment>
    )
  }
}
export default Menu