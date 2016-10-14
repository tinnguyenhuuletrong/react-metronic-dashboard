import React from 'react'
import LogoImg from '../../static/assets/layouts/layout/img/logo.png'
export const Header = () => (
  <div className="page-logo">
    <a href="index.html">
        <img src={LogoImg} alt="logo" className="logo-default" /> </a>
    <div className="menu-toggler sidebar-toggler">
        <span></span>
    </div>
  </div>
)

export default Header
