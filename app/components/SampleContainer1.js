import React, { Component } from 'react';
import { render } from 'react-dom';
import { Container } from 'flux/utils';
import { Link } from 'react-router'
import SampleStore from '../stores/SampleStore';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import { Toolbar, ToolbarTitle } from 'material-ui/Toolbar';
import { List, ListItem } from 'material-ui/List';
import ReactGridLayout from 'react-grid-layout';

class _SampleContainer1 extends Component {
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
    let layout = [
      {i: 'a', x: 0, y: 0, w: 1, h: 2, static: true},
      {i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4},
      {i: 'c', x: 4, y: 0, w: 1, h: 2}
    ];
    const navStyle = {
      'color': 'white',
      height: '64px',
    }
    return (
      <div>
        <AppBar title="Sample App">
            <Link to="sample2"><FlatButton rippleColor="pink" style={navStyle}>Whaaaaat</FlatButton></Link>
            <Link to="sample2"><FlatButton style={navStyle}>Who</FlatButton></Link>
            <Link to="sample2"><FlatButton style={navStyle}>Where</FlatButton></Link>
            <Link to="sample2"><FlatButton style={navStyle}>How</FlatButton></Link>
        </AppBar>
        <Toolbar>
          <ToolbarTitle text="Container: SampleContainer1"/>
        </Toolbar>
        <List>
          <ListItem><Link to="/">Top</Link></ListItem>
          <ListItem><Link to="sample1">Sample1</Link></ListItem>
          <ListItem><Link to="sample2">Sample2</Link></ListItem>
        </List>

        <ReactGridLayout className="layout" layout={layout} cols={12} rowHeight={30} width={1200}>
          <div key={'a'}>a</div>
          <div key={'b'}>b</div>
          <div key={'c'}>c</div>
        </ReactGridLayout>
      </div>
    );
  }
}

const SampleContainer1 = Container.create(_SampleContainer1);
export default SampleContainer1;
