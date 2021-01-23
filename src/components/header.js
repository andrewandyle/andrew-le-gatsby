import { Link } from "gatsby"
import React, { useState } from "react"

import Logo from '../images/icons/logo.png'

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
    </Wrapper>
  )
}

export default Header
