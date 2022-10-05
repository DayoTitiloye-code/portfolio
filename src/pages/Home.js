import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailIcon from '@mui/icons-material/Email'
import '../styles/Home.css'
function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi, My Name is Dayo!</h2>
        <div className="prompt">
          <p>
            A computer science and cyber security graduate seeking to launch a
            career as a tech developer.
          </p>
          <GitHubIcon />
          <LinkedInIcon />
          <EmailIcon />
        </div>
      </div>
      <div className="skills">
        <h1> Skills </h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End </h2>
            <span>
              React, HTML, CSS, React Native, NPM, Bootstrap, MaterialUI,
              JavaScript
            </span>
          </li>
          <li className="item">
            <h2> Back-End </h2>
            <span>NodeJS, MySQL, ExpressJS</span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home
