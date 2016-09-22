import React, { Component } from 'react';
import initParticlesJs from '../../helpers/particles';
import Header from '../../components/header.jsx';
import Services from '../../components/services.jsx';
import Process from '../../components/process.jsx';
import Work from '../../components/work.jsx';
import Contact from '../../components/contact.jsx';


export default class Home extends Component {
  componentDidMount() {
    initParticlesJs();
  }
  render() {
    return (
      <div className="home">
        <Header />
        <Services />
        <Process />
        <Work />
        <Contact />
      </div>
    );
  }
}
