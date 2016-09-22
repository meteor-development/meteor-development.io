import React from 'react';
import Navbar from './navbar.jsx';

const Header = () => (
  <div className="ui masthead inverted center aligned vertical segment">
    <div id="particles-js"></div>
    <div className="ui container">
      <Navbar />
    </div>
    <div className="ui text container main-header">
      <h1 className="ui header">
        Meteor Development
      </h1>
      <h2>Professional Development Agency</h2>
      <button type="submit" className="ui large button">
        Work With Us
      </button>
    </div>
  </div>
);

export default Header;
