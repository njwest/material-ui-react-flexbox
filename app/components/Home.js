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
import Konami from 'react-konami';

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
    const Slappy = () =>{
      console.log('aww yeah');
    }

    return (
      <div>
      <Konami easterEgg={Slappy} />
      <Toolbar>
        <div className="container">
          <ToolbarTitle text="About Nick"/>
        </div>
      </Toolbar>

        <easterEgg/>
        <div className="container">

          <Row>
            <Col xs={12} md={7}>
              <Card className="card">
                <div className="cardContent">
                  <h2>Sup suckas</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
              </Card>
            </Col>

            <Col xs={12} md={5}>
              <Card className="card">
                <div className="cardContent">
                  <h2>Mo stuff</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
              </Card>
            </Col>
          </Row>

        </div>
    </div>
    );
  }
}

const Home = Container.create(_Home);
export default Home;

// <List>
//   <ListItem><Link to="/">Top</Link></ListItem>
//   <ListItem><Link to="sample1">Sample1</Link></ListItem>
//   <ListItem><Link to="sample2">Sample2</Link></ListItem>
// </List>
