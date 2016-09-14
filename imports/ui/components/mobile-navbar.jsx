import React from 'react';
import { IndexLink, Link } from 'react-router';

export default class MobileNavbar extends React.Component {
    render() {
      return (
        <div className="ui sidebar inverted vertical menu">
          <Link to="/" activeClassName="active">Home</Link>
        </div>
      );
   }
}
