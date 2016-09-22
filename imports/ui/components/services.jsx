import React from 'react';

const Services = () => (
  <div className="ui center aligned vertical segment">
    <h1>Our Services</h1>

    <div className="ui container">
      <div className="ui stackable three column grid">
        <div className="column">
          <h2 className="ui icon header">
            <i className="idea icon"></i>
            <div className="content">
              Consulting and Strategy
              <div className="sub header">Manage your account settings and set e-mail preferences.</div>
            </div>
          </h2>
        </div>
        <div className="column">
          <h2 className="ui icon header">
            <i className="configure icon"></i>
            <div className="content">
              Web & Mobile Apps Development
              <div className="sub header">Manage your account settings and set e-mail preferences.</div>
            </div>
          </h2>
        </div>
        <div className="column">
          <h2 className="ui icon header">
            <i className="rocket icon"></i>
            <div className="content">
              Post Launch Support & Hosting
              <div className="sub header">Manage your account settings and set e-mail preferences.</div>
            </div>
          </h2>
        </div>
      </div>
    </div>
  </div>
);

export default Services;
