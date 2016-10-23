import React, { Component } from 'react';
import { render } from 'react-dom';
import { Container } from 'flux/utils';
import { Link } from 'react-router'
import SampleStore from '../stores/SampleStore';
import AppBar from 'material-ui/AppBar';
import { Toolbar, ToolbarTitle } from 'material-ui/Toolbar';
import { List, ListItem } from 'material-ui/List';
import { Card } from 'material-ui/Card';
import { Grid, Row, Col } from 'react-flexbox-grid/lib/index';
import {Navi} from './navi';

class _TopContainer extends Component {
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
        <AppBar title="Sample App" children={Navi}/>
        <Toolbar>
          <ToolbarTitle text="Container: TopContainer"/>
        </Toolbar>
        <List>
          <ListItem><Link to="/">Top</Link></ListItem>
          <ListItem><Link to="sample1">Sample1</Link></ListItem>
          <ListItem><Link to="sample2">Sample2</Link></ListItem>
        </List>
        <Grid>
          <Row around="xs">
            <Col xs={11} md={8}>
              <Card>
                <h2>Sup suckas</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </Card>
            </Col>

            <Col xs={11} md={4}>
              <Card>
                <h2>Mo stuff</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </Card>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

const TopContainer = Container.create(_TopContainer);
export default TopContainer;
