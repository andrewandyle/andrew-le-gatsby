import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

// Styled Components
import {
  LogoContainer,
  ButtonContainer,
  DownloadResume,
  WelcomeContainer,
  PicturesContainer,
} from '../styles/index.styles'

// Images
import Portrait from '../images/home/portrait.jpg'
import Setup from '../images/home/setup.jpg'
import Wonderspaces from '../images/home/wonderspaces.jpg'
import Logo from '../images/icons/logo.png'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <LogoContainer>
      <img src={Logo} width={800} alt="Logo" />
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
    <WelcomeContainer>
      <PicturesContainer>
        <img id="left" src={Portrait} alt="Portrait" />
        <img id="middle" src={Setup} alt="Setup" />
        <img id="right" src={Wonderspaces} alt="Wonderspaces" />
      </PicturesContainer>
      <h1>Welcome!</h1>
      <p>I'm a senior Computer Science student at UT Austin. As a growing software engineer,
        my passion lies in delivering software products to help clients in need, being an
        effective team player, and developing my expertise to better reach those goals.
        Envisioning the impact my work has on my target audience is what drives me!</p>
    </WelcomeContainer>
    
  </Layout>
)

export default IndexPage
