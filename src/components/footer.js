import React from 'react'

const Footer = () => (
  <footer className="footer">
    <p>
      Made with{' '}
        <span role="img" aria-label="love">
        ❤️
      </span>{' '}
      in Berlin.
    </p>
    <style jsx>{`
      .footer {
        grid-row: footer;
        font-family: 'Work Sans', sans-serif;
        background-color: black;
        color: white;
        text-align: center;
      }
      .footer p {
        font-size: 1rem;
      }
    `}
    </style>
  </footer>
)
export default Footer