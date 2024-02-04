// src/Header.js

import React from 'react';
import './Header.css'; // Create a corresponding CSS file for styling

const Header = () => {
  return (
    <div className="header">
      <a href="#default" className="logo">
        CompanyLogo
      </a>
      <div className="header-right">
        <a href="#home" className="button">
          Share
        </a>
      </div>
    </div>
  );
};

export default Header;
