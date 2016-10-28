import React, { Component } from 'react';
import { render } from 'react-dom';
import { Container } from 'flux/utils';
import SampleStore from '../stores/SampleStore';
import { Toolbar, ToolbarTitle } from 'material-ui/Toolbar';
import { List, ListItem } from 'material-ui/List';
import ReactGridLayout from 'react-grid-layout';
import RaisedButton from 'material-ui/RaisedButton';
import { Grid, Row, Col } from 'react-flexbox-grid/lib/index';
import { Card } from 'material-ui/Card';


class _Portfolio extends Component{
  constructor(props) {
    super(props);
  }

  static getStores() {
    return [SampleStore];
  }

  static calculateState() {
    return {
      sample: SampleStore.getState()
    };
  }


  componentDidMount() {
  }

render(){
  return <div>
        <Toolbar>
          <div className="container">
            <ToolbarTitle text="Nick's Work"/>
          </div>
        </Toolbar>
        <div className="container">
          <Row>
          <Col xs={12} sm={6} md={4}>
            <Card className="card cardContent">
              <a href="http://www.nickwe.st" target="_blank">
                <img className="projectLogo" id="nickpic" src="/img/nickwest.png" alt="Nick West"/>
                <h3 className="projectTitle">NickWe.st</h3>
              </a>
              <p>Nick West's portfolio (you are here).</p>
              <h4>Tech used:</h4>
              <ul>
                <li>ReactJS</li>
                <li>Flux Architecture</li>
                <li>Material UI</li>
                <li>React Flexbox Grid</li>
                <li>React Router</li>
                <li>Webpack</li>
                <li>The <strong>Konami Code</strong>...</li>
              </ul>
            </Card>
          </Col>
            <Col xs={12} sm={6} md={4}>
        			<Card className="card cardContent">
        				<a href="https://climb-on.herokuapp.com" target="_blank">
                  <img className="projectLogo" src="/img/climb-on-logo.png" alt="Climb On"/>
                  <h3 className="projectTitle">Climb On v0.0.3a</h3>
                </a>
                <p>A rock climbing and bouldering app in which users can upload climb entries comprised of the users' geolocation, climb difficulty, climb rating, and comments.</p>
                <p>Nick West and developer Arnold Lei are currently rebuilding this app in React Native.</p>
                <h4>Tech used:</h4>
                <ul>
                  <li>MeteorJS</li>
                  <li>ES6 ReactJS</li>
                  <li>React Router</li>
                  <li>React Komposer</li>
                  <li>HTML5 Geolocation</li>
                  <li>MongoDB</li>
                  <li>Mailgun</li>
                  <li>Google Maps</li>
                  <li>Node</li>
                  <li>Heroku</li>
                  <li>React Bootstrap</li>
                </ul>

        			</Card>
            </Col>
            <Col xs={12} sm={6} md={4}>
        			<Card className="card cardContent">
        				<a href="http://www.impulsion.io" target="_blank">
                  <img className="impulsion" src="img/impulsion.png" alt="Impulsion" href="http://www.impulsion.io" target="_blank"/>
                  <h3 className="projectTitle">Impulsion v0.0.2a</h3>
                </a>
                <p>A Cognitive Behavioral Modification web app for breaking habits.</p>
                <p>Nick is currently rebuilding this app in React.</p>
                <h4>Tech used:</h4>
                <ul>
                  <li>Express</li>
                  <li>Sequelize</li>
                  <li>MySQL</li>
                  <li>JQuery</li>
                  <li>MaterializeCSS</li>
                  <li>Node</li>
                  <li>Heroku</li>
                  <li>Firebase (for now-hacked chat)</li>
                </ul>
        			</Card>
            </Col>
            </Row>
      </div>
    </div>
    }
  }

  const Portfolio = Container.create(_Portfolio);
  export default Portfolio;
