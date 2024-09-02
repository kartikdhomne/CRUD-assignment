// src/components/HamburgerMenu.js
import React, { useState } from 'react';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="hamburger-menu">
      <button className="menu-btn" onClick={() => setIsOpen(!isOpen)}>☰ Menu</button>
      {isOpen && (
        <ul>
          <li>Main Item 1</li>
          <li>
            Main Item 2
            <ul>
              <li>Sub-item 1</li>
              <li>Sub-item 2</li>
            </ul>
          </li>
          <li>Main Item 3</li>
        </ul>
      )}
    </div>
  );
};

export default HamburgerMenu;
