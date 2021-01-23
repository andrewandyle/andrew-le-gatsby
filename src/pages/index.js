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
    </ButtonContainer>
  </Layout>
)

export default IndexPage
