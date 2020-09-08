import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import thumbsUp from "../images/like-outline.svg";

const Header = ({ siteTitle }) => (
    <header class="header">
        <div class="header__logo">
            <h1 class="header__logo__heading">
                <Link to="/" >
                {siteTitle}
                </Link>
            </h1>
            <span class="header__logo__subheading">
                by Tim New
            </span>
            <img className="header__logo__icon" src={thumbsUp}/>
        </div>
        <ul class="header__nav">
            <li class="header__nav__item"><Link to="">About</Link></li>
            <li class="header__nav__item"><Link to="">Selected Work</Link></li>
            <li class="header__nav__item"><Link to="">Contact</Link></li>
        </ul>
    </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
