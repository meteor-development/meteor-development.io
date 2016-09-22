import React from 'react';
import { IndexLink } from 'react-router';

const Navbar = () => (
  <div className="ui large secondary inverted pointing main menu">
    <div className="ui container">
      <a className="toc item"><i className="sidebar icon"></i></a>
      <IndexLink to="/" className="item">MeteorDevelopment.io</IndexLink>
      <div className="right menu">
        <a className="ui item">
          Services
        </a>
        <a className="ui item">
          Process
        </a>
        <a className="ui item">
          Work
        </a>
        <a className="ui item">
          Contact
        </a>
      </div>
    </div>
  </div>
);

export default Navbar;
