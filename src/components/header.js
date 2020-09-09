import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import thumbsUp from "../images/like-outline.svg";

const Header = ({ siteTitle }) => (
    <header class="header">
        <div class="header--inner">
            <div class="header--inner__logo">
                <h1 class="header--inner__logo__heading">
                    <Link to="/" >
                    {siteTitle}
                    </Link>
                </h1>
                <span class="header--inner__logo__subheading">
                    by Tim New
                </span>
                <img className="header--inner__logo__icon" src={thumbsUp}/>
            </div>
            <ul class="header--inner__nav">
                <li class="header--inner__nav__item"><Link to="#about">About</Link></li>
                <li class="header--inner__nav__item"><Link to="#contact">Contact</Link></li>
            </ul>
        </div>
    </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
