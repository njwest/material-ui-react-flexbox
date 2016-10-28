import React from 'react';
import { render } from 'react-dom';
import { Container } from 'flux/utils';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import Layout from './layouts/main.js';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();


render((<Router history={browserHistory}>
      <Route path="/" component={Layout}>
        <IndexRoute name="index" component={Home}/>
        <Route path="/portfolio" name="portfolio" component={Portfolio}/>
      </Route>
    </Router>)
, document.getElementById('root'));
