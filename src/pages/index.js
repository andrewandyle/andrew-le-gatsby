import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

// Styled Components
import {
  LogoContainer,
  ButtonContainer,
  MarqueeContainer,
  DownloadResume,
} from '../styles/index.styles'

// Images
import Avatar from '../images/icons/avatar.png'
import Logo from '../images/icons/logo.png'
import Email from '../images/icons/email.png'
import LinkedIn from '../images/icons/linkedin.png'
import GitHub from '../images/icons/github.jpg'

// Marquee
import Marquee from 'react-fast-marquee'

// Arrows for Marquee
import Arrow from '../images/icons/arrow.gif'
import ArrowSlow from '../images/icons/arrow-slow.gif'
import ArrowBlue from '../images/icons/arrow-blue.gif'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{ position: "relative" }}>
      <MarqueeContainer>
        <Marquee gradientColor={[18, 18, 18]} speed={150} style={{ height: 50 }}>
          <img src={ArrowBlue} alt="Arrow" style={{ maxWidth: 50, maxHeight: 50}} />
        </Marquee>
        <Marquee gradientColor={[18, 18, 18]} speed={100} style={{ marginTop: 30, height: 100 }}>
          <img src={Arrow} alt="Arrow" style={{ maxWidth: 100, maxHeight: 100}} />
        </Marquee>
        <Marquee gradientColor={[18, 18, 18]} speed={75} style={{ marginTop: 20, height: 75 }}>
          <img src={Arrow} alt="Arrow" style={{ maxWidth: 75, maxHeight: 75}} />
        </Marquee>
        <Marquee gradientColor={[18, 18, 18]} speed={125} style={{ marginTop: 40, height: 60 }}>
          <img src={ArrowBlue} alt="Arrow" style={{ maxWidth: 60, maxHeight: 60}} />
        </Marquee>
        <Marquee gradientColor={[18, 18, 18]} speed={60} style={{ marginTop: 30, height: 125 }}>
          <img src={ArrowSlow} alt="Arrow" style={{ maxWidth: 125, maxHeight: 125}} />
        </Marquee>
      </MarqueeContainer>
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
    </div>
  </Layout>
)

export default IndexPage
