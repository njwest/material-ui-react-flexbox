import React from 'react';
import { render } from 'react-dom';
import { Container } from 'flux/utils';
import { Router, Route, browserHistory } from 'react-router'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import TopContainer from './components/TopContainer';
import SampleContainer1 from './components/SampleContainer1';
import SampleContainer2 from './components/SampleContainer2';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const muiTheme = getMuiTheme({});

render((
  <MuiThemeProvider muiTheme={muiTheme}>
    <Router history={browserHistory}>
      <Route path="/" component={TopContainer}/>
      <Route path="sample1" component={SampleContainer1}/>
      <Route path="sample2" component={SampleContainer2}/>
    </Router>
  </MuiThemeProvider>
), document.getElementById('root'));
