import React from 'react';
import MobileNavbar from '../components/mobile-navbar.jsx';
import Footer from '../components/footer.jsx';

export default class LandingPage extends React.Component {
  render () {
    return (
      <div>
        <MobileNavbar/>
        <div className="pusher">
          { this.props.children }
          <Footer/>
        </div>
      </div>
    );
  }
}
