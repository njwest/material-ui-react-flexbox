import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router';
import { Toolbar, ToolbarTitle } from 'material-ui/Toolbar';
import Konami from 'react-konami';

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
    const navImg = {
      paddingTop: '16px',
      height: '64px',
      width: '30px',
    }

    const styleChange = () =>{

    }

    return <div>
    <Konami easterEgg={styleChange} />

    <Drawer open={this.state.open} docked={false} onRequestChange={(open) => this.setState({open})}>
      <Link to="/"><MenuItem><FlatButton >Portfolio</FlatButton></MenuItem></Link>
      <MenuItem>Menu Item 2</MenuItem>

    </Drawer>
    <AppBar onLeftIconButtonTouchTap={this.handleToggle} title="Nick We.st">
      <div className="navLinks">
          <Link to="/"><FlatButton rippleColor="pink" style={navStyle}>About Nick</FlatButton></Link>
          <Link to="/"><FlatButton style={navStyle}>Portfolio</FlatButton></Link>
          <Link to="/"><FlatButton style={navStyle}>Contact</FlatButton></Link>
          <FlatButton href="https://www.github.com/njwest" target="_blank" style={navImg}><img src="/img/30pxgit.png" /></FlatButton>
          <FlatButton href="http://stackoverflow.com/users/6421202/nick-west" target="_blank" style={navImg}><img src="/img/30pxstack.png" /></FlatButton>
          <FlatButton href="https://twitter.com/n1ckw3st" target="_blank" style={navImg}><img src="/img/30pxtwit.png" /></FlatButton>
          <FlatButton href="https://www.linkedin.com/in/nick-west-67471742" target="_blank" style={navImg}><img src="/img/30pxlinked.png" /></FlatButton>
      </div>
    </AppBar>
      {this.props.children}
    </div>;
  }
};
