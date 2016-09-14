import React from 'react';
import ReactDOM from 'react-dom';
import { IndexLink, Link } from 'react-router';

export default class Navbar extends React.Component {
    render() {
      return (
        <div className="ui large secondary inverted pointing main menu">
          <div className="ui container">
            <a className="toc item"><i className="sidebar icon"></i></a>
            <IndexLink to="/" className="item">Meteor Development</IndexLink>
            <IndexLink to="/" className="item" activeClassName="active">
              Home
            </IndexLink>
          </div>
        </div>
      );
   }
}
