import React, { Component } from 'react';
import { render } from 'react-dom';
import { Container } from 'flux/utils';
import { Link } from 'react-router'
import SampleStore from '../stores/SampleStore';
import AppBar from 'material-ui/AppBar';
import { Toolbar, ToolbarTitle } from 'material-ui/Toolbar';
import { List, ListItem } from 'material-ui/List';
import {Responsive, WidthProvider} from 'react-grid-layout';

const ResponsiveReactGridLayout = WidthProvider(Responsive);

class _SampleContainer2 extends Component {
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

    return (
      <div>
        <AppBar title="Sample App" />
        <Toolbar>
          <ToolbarTitle text="Container: SampleContainer2"/>
        </Toolbar>
        <List>
          <ListItem><Link to="/">Top</Link></ListItem>
          <ListItem><Link to="sample1">Sample1</Link></ListItem>
          <ListItem><Link to="sample2">Sample2</Link></ListItem>
        </List>
        <ResponsiveReactGridLayout className="layout"     layouts={layout}
          breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}
          cols={{lg: 12, md: 10, sm: 6, xs: 4, xxs: 2}}>
          <div key={"1"}>1</div>
          <div key={"2"}>2</div>
          <div key={"3"}>3</div>
        </ResponsiveReactGridLayout>
      </div>
    );
  }
}

const SampleContainer2 = Container.create(_SampleContainer2);
export default SampleContainer2;
