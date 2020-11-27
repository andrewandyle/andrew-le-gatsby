import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from '../images/logo.png'

import { Wrapper } from '../styles/Header.styles'

const Header = ({ siteTitle }) => (
  <Wrapper>
    <Link to="/">
      <img src={Logo} width={100} alt="Andrew Le" />
    </Link>
  </Wrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
