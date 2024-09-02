// src/components/Header.js
import React from 'react';
import HamburgerMenu from './HamburgerMenu';
import HorizontalMenu from './HorizontalMenu';

const Header = () => {
  return (
    <header className="header">
      <HamburgerMenu />
      <HorizontalMenu />
    </header>
  );
};

export default Header;
