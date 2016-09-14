import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import LandingPage from '../../ui/layouts/landing-page.jsx';
import Home from '../../ui/pages/home/home.jsx';
import NotFound from '../../ui/components/not-found.jsx';

Meteor.startup( () => {
  render(
    <Router history={ browserHistory }>
      <Route path="/" component={ LandingPage }>
        <IndexRoute component={ Home } />
      </Route>
      <Route path="*" component={ NotFound } />
    </Router>,
    document.getElementById( 'react-root' )
  );
});
