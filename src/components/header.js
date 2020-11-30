import { Link } from "gatsby"
import React, { useState } from "react"

import Logo from '../images/icons/logo.png'
import LinkedIn from '../images/icons/linkedin.png'
import GitHub from '../images/icons/github.jpg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import { Wrapper, MobileWrapper } from '../styles/components/header.styles'

const Header = () => {
  const [mobileIconsVisible, setMobileIconsVisible] = useState(false)

  return (
    <Wrapper mobileIconsVisible={mobileIconsVisible}>
      <MobileWrapper>
        <Link id="logo" to="/">
          <img src={Logo} height={70} alt="Andrew Le" />
        </Link>
        <FontAwesomeIcon id="bars" icon={faBars} onClick={() => setMobileIconsVisible(!mobileIconsVisible)} />
      </MobileWrapper>
      <Link to="/life">
        Life
      </Link>
      <Link to="/experience">
        Experience
      </Link>
      <div>
        <a href="https://www.linkedin.com/in/andrewandyle/" target="_blank" rel="noreferrer">
          <img src={LinkedIn} height={50} alt="LinkedIn" />
        </a>
        <a href="https://github.com/andrewandyle" target="_blank" rel="noreferrer">
          <img src={GitHub} height={50} alt="GitHub" />
        </a>
      </div>
    </Wrapper>
  )
}

export default Header
