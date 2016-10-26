import React, { Component } from 'react';
import { render } from 'react-dom';
import { Container } from 'flux/utils';
import { Link } from 'react-router'
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
  return <div className="container">
          <Row>
            <Col xs={12} md={4}>
        			<Card className="card cardContent">
        				<img className="projectLogo" src="/img/climb-on-logo.png" alt="Climb On" href="https://climb-on.herokuapp.com"/>

        				<a href="https://climb-on.herokuapp.com"><h3 className="project">Climb On v0.0.3a</h3></a>
                <p>A social climbing and bouldering app </p>
                <h4>Tech used:</h4>
                <ul>
                  <li>MeteorJS</li>
                  <li>ES6 ReactJS</li>
                  <li>React Router</li>
                  <li>React Komposer</li>
                  <li>MongoDB</li>
                  <li>Mailgun</li>
                  <li>Node</li>
                </ul>

        			</Card>
            </Col>
            <Col xs={12} md={4}>
        			<Card className="card  cardContent">
        				<img src="img/impulsion.png" alt="Impulsion" href="http://www.impulsion.io"/>

        				<h3>Impulsion v0.0.2a</h3>
                <p>A Cognitive Behavioral Modification habit-breaking web app.</p>
                <h4>Tech used:</h4>
                <ul>
                  <li>Sequelize</li>
                  <li>MySQL</li>
                  <li>Vanilla JavaScript & JQuery</li>
                  <li>MaterializeCSS</li>
                  <li>Node</li>
                </ul>
        			</Card>
            </Col>
            </Row>
      </div>
    }
  }

  const Portfolio = Container.create(_Portfolio);
  export default Portfolio;
