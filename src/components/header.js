import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Logo from '../images/icons/logo.png'
import LinkedIn from '../images/icons/linkedin.png'
import GitHub from '../images/icons/github.jpg'

import { Wrapper } from '../styles/Header.styles'

const Header = ({ siteTitle }) => (
  <Wrapper>
    <Link to="/">
      <img src={Logo} height={70} alt="Andrew Le" />
    </Link>
    <Link to="/life">
      Life
    </Link>
    <Link to="/experience">
      Experience
    </Link>
    <a href="https://www.linkedin.com/in/andrewandyle/" target="_blank" rel="noreferrer">
      <img src={LinkedIn} height={50} alt="LinkedIn" />
    </a>
    <a href="https://github.com/andrewandyle" target="_blank" rel="noreferrer">
      <img src={GitHub} height={50} alt="GitHub" />
    </a>
  </Wrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
