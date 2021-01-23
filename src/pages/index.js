import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

// Styled Components
import {
  LogoContainer,
  ButtonContainer,
  DownloadResume,
} from '../styles/index.styles'

// Images
import Avatar from '../images/icons/avatar.png'
import Logo from '../images/icons/logo.png'
import Email from '../images/icons/email.png'
import LinkedIn from '../images/icons/linkedin.png'
import GitHub from '../images/icons/github.jpg'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <LogoContainer>
      <img id="avatar" src={Avatar} alt="Avatar" />
      <img id="logo" src={Logo} alt="Logo" />
    </LogoContainer>
    <ButtonContainer>
      <DownloadResume
        rel="noopener noreferrer"
        href="/AndrewLe-Resume.pdf"
        target="_blank"
      >
        DOWNLOAD RESUME
      </DownloadResume>
      <div>
        <a href="mailto:andrewandyle@gmail.com" target="_blank" rel="noreferrer">
          <img src={Email} height={50} alt="Email" />
        </a>
        <a href="https://www.linkedin.com/in/andrewandyle/" target="_blank" rel="noreferrer">
          <img src={LinkedIn} height={50} alt="LinkedIn" />
        </a>
        <a href="https://github.com/andrewandyle" target="_blank" rel="noreferrer">
          <img src={GitHub} height={50} alt="GitHub" />
        </a>
      </div>
    </ButtonContainer>
  </Layout>
)

export default IndexPage
