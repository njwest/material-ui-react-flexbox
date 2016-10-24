import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router';
import { Toolbar, ToolbarTitle } from 'material-ui/Toolbar';

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  propTypes: {
    children: React.PropTypes.element.isRequired
    }

  render() {
    const navStyle = {
      'color': 'white',
      height: '64px',
    }

    return <div>
    <Drawer open={this.state.open} docked={false} onRequestChange={(open) => this.setState({open})}>
      <MenuItem>Menu Item</MenuItem>
      <MenuItem>Menu Item 2</MenuItem>
    </Drawer>
    <AppBar onLeftIconButtonTouchTap={this.handleToggle} title="Nick West's Home">
        <Link to="sample2"><FlatButton rippleColor="pink" style={navStyle}>Whaaaaat</FlatButton></Link>
        <Link to="sample2"><FlatButton style={navStyle}>Who</FlatButton></Link>
        <Link to="sample2"><FlatButton style={navStyle}>Where</FlatButton></Link>
        <Link to="sample2"><FlatButton style={navStyle}>How</FlatButton></Link>
    </AppBar>
    <Toolbar>
      <ToolbarTitle text="Container: SampleContainer1"/>
    </Toolbar>
      {this.props.children}
    </div>;
  }
};
