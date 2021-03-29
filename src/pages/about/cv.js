import React from 'react'
import Logo from '../../assets/cdk-logo.svg'
import Layout from '../../components/layout'

const Resume = () => (
  <Layout>
    <p>
      My name is Christian Kopac - I’m an argentinian + slovene developer with a
      natural attraction for interfaces, interactions, branding & typography.
    </p>
    <p>
      In 2014, I followed the best european coding bootcamp and got hired by
      them subsequently. I sharpened my design and front-end skills by building
      the online version of the bootcamp and coached +250 students in Paris,
      Amsterdam & Brussels.
    </p>
    <p>
      Since 2015, I'm operating as a freelance Product Designer & independent
      maker.
    </p>
    <p>Currently open to new opportunities.</p>
    <style jsx>
      {`
        .logo {
          width: 200px;
          margin: 0 auto;
        }
      `}
    </style>
  </Layout>
)

export default Resume
