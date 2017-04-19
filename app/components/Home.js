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

class _Home extends Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

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

  render() {

    return (
      <div>
      <Toolbar>
        <div className="container">
          <ToolbarTitle text="About Nick"/>
        </div>
      </Toolbar>

        <easterEgg/>
        <div className="container">

          <Row className="section1">
            <Col xs={12}>
              <div className="home1">
                Nick is a mensch

              </div>
            </Col>
          </Row>

          <Row>
            <Col xs={12}>
              <div>
                this is another fucking div

              </div>
            </Col>
          </Row>
        </div>
    </div>
    );
  }
}

const Home = Container.create(_Home);
export default Home;
