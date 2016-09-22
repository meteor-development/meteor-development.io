import React from 'react';

const Footer = () => (
  <div className="ui inverted vertical segment footer-color">
    <footer className="ui center aligned container main-footer">
      <nav>
        <div className="ui horizontal list footer-links">
          <a className="item" href="#services">Services</a>
          <a className="item" href="#process">Process</a>
          <a className="item" href="#work">Work</a>
          <a className="item" href="#contact">Contact</a>
        </div>
        <div className="footer-social">
          <div className="ui horizontal list">
            <a href="https://facebook.com/meteordevelopment" target="_blank" className="item">
              <i className="facebook f big icon" alt="facebook"></i>
            </a>
            <a href="https://twitter.com/meteordevelopment" target="_blank" className="item">
              <i className="twitter big icon" alt="twitter"></i>
            </a>
          </div>
        </div>
      </nav>
      <p>Copyright © 2016 MeteorDevelopment.io</p>
    </footer>
  </div>
);

export default Footer;
