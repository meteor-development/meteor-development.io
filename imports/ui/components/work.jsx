import React from 'react';

const Work = () => (
  <div className="ui center aligned vertical segment">
    <h1>Our Work</h1>

    <div className="ui container">
      <div className="ui stackable three column grid">
        <div className="column">
          <a href="http://google.com" className="ui medium image">
            <img src="http://placehold.it/300x300" />
          </a>
        </div>
        <div className="column">
        <a href="http://google.com" className="ui medium image">
          <img src="http://placehold.it/300x300" />
        </a>
        </div>
        <div className="column">
        <a href="http://google.com" className="ui medium image">
          <img src="http://placehold.it/300x300" />
        </a>
        </div>
      </div>
    </div>
  </div>
);

export default Work;
