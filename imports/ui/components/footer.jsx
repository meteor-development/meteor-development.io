import React from 'react';

const Footer = (props) => (
  <div className="ui inverted vertical segment footer-color">
    <footer className="ui center aligned container main-footer">
      <nav>
        <div className="ui horizontal list footer-links">
          <a className="item" href="/faq">FAQ</a>
          <a className="item" href="/plans">Plans</a>
          <a className="item" href="/blog">Blog</a>
          <a className="item" href="#">Newsletter</a>
          <a className="item" href="/legal">Legal</a>
          <a className="item" href="/privacy">Privacy</a>
        </div>
        <div className="footer-social">
          <div className="ui horizontal list">
            <a href="https://facebook.com/#" target="_blank" className="item">
              <i className="facebook f big icon" alt="facebook"></i>
            </a>
            <a href="https://twitter.com/#" target="_blank" className="item">
              <i className="twitter big icon" alt="facebook"></i>
            </a>
          </div>
        </div>
      </nav>
      <p>Copyright © 2016 Post Ranking</p>
    </footer>
  </div>
);

export default Footer;
