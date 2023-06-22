import React from 'react'
import LOGO from '../../assets/images/logo.png';
import './header.css'
const Header = () => {
  return (
    <header>
      <div className="header__container">
        <div className="logo">
          <img src={LOGO} alt="sparkeloLogo" />
        </div>
        <div className="header__title">
          <span>Employee Management</span>
        </div>
      </div>
    </header>
  );
}

export default Header