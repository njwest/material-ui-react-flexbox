import React from 'react';
import { render } from 'react-dom';
import { Container } from 'flux/utils';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Layout from './layouts/main.js';
import TopContainer from './components/TopContainer';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const muiTheme = getMuiTheme({});

render((
  <MuiThemeProvider muiTheme={muiTheme}>
    <Router history={browserHistory}>
      <Route path="/" component={Layout}>
        <IndexRoute name="index" component={Home}/>
        <Route path="/portfolio" name="portfolio" component=  {Portfolio}/>
      </Route>
    </Router>
  </MuiThemeProvider>
), document.getElementById('root'));
