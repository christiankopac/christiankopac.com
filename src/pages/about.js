import React from 'react'
import Logo from '../assets/cdk-logo.svg'
import Layout from '../components/layout'
import { Link } from 'gatsby'

const AboutPage = () => (
  <Layout>
  <div className="content">
    <p>Hi! I'm Christian!</p>

    <p>I was born and raised in Buenos Aires, Argentina, in the middle of a little Slovenian diaspora</p>

    <p>I moved to Europe in 2010, lived in Brussels, Klagenfurt, Ljubljana and since 2015, Berlin</p>

    <p>I have worked as a front-end developer for media and advertisement agencies, to the point I decided I needed some fresh air and switched jobs completely. That's how I learned about specialty coffee and improved my soft skills while managing a small café</p>

    <p>After a while, I felt the urge to get back to coding, and decided to work on improving and refreshing my skillset. After an almost 2 year break from active development, I went all-in with the JS ecosystem. I recently finished a coding bootcamp at <a target="_blank" href="https://digitalcareerinstitute.org">DCI</a>.</p>

    <p>My preferred tools today include: node, express, React, Redux, Gatsby... amongst other. Interested in taking my knowledge to the top of the profession as I'm an avid and fast learner. You can find examples of my code on <a target="_blank" href="https://twitter.com/christiankopac">Github</a> or the porfolio section of this site.</p>

    <p>If you would like to know more about my professional life, let's talk on <a target="_blank" href="https://www.linkedin.com/in/christiankopac/">Linkedin</a>. I can speak English, Spanish, Slovenian, and German (B1).</p>

    <p>When my text editor is not open <strike>and I'm not procrastinating</strike> you would probably find me in some music related project. Some possible options are: digging records, shopping on <a target="_blank" href="https://bandcamp.com/teatang">bandcamp</a>, DJing, organizing an event with <a target="_blank" href="https://imaginaryradiostations.com">Imaginary Radio Stations</a>, preparing a playlist for <a target="_blank" href="https://radiostudent.si/ljudje/christian-kopa%C4%8D">Radio Študent</a> working on <a target="_blank" href="https://soundcloud.com/cp-ak">my music</a> or simply listening to <a target="_blank" href="https://open.spotify.com/user/teatang">music on-the-go</a> and enjoying nature.</p>

    <p>Currently open to new opportunities.</p>

    <p>PS: Don't forget to follow me on <a href="https://twitter.com/teatang">twitter</a> and check the <a target="_blank" href="https://github.com/christiankopac/christiankopac.com">source code</a> of this website, maybe even a PR?</p>
    </div>
    <style jsx>
      {`
      .content {
        padding: 0 1rem;
      }
        .logo {
          width: 200px;
          margin: 0 auto;
        }
        p {
          font-family: 'Merriweather', serif;
          line-height: 1.7rem;
          font-size: 1rem;
        }
        a:hover {
          background-color: black;
        }
      `}
    </style>
  </Layout>
)

export default AboutPage
