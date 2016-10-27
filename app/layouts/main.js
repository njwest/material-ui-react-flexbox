import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router';
import { Toolbar, ToolbarTitle } from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
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
      height: '64px',
      color: 'black',
    }
    const navImg = {
      paddingTop: '16px',
      height: '64px',
      width: '20px',
      paddingLeft: '0px',
      paddingRight: '0px',
    }

    const konamiC0de = () =>{
      console.log('lol');
      let audio = new Audio('/audio/syds-theme-mm.mp3');
      audio.play();
      var el = document.getElementById("nickpic");
      el.src="/img/nickglasses.png";
    }

    const drawerStyle={
      "backgroundColor": "rgb(0, 188, 212)",
    }

    return <div>
    <Konami easterEgg={konamiC0de} />

    <Drawer open={this.state.open} containerStyle={drawerStyle} docked={false} onRequestChange={(open) => this.setState({open})}>
      <AppBar title="NickWe.st" iconElementLeft={<IconButton><NavigationClose /></IconButton>} onLeftIconButtonTouchTap={this.handleToggle}/>
      <Link to="/"><MenuItem>About</MenuItem></Link>
      <Link to="/portfolio">
      <MenuItem>Nick's Work</MenuItem>
      </Link>
      <MenuItem href="https://www.github.com/njwest" target="_blank"><img src="/img/30pxgit.png" /></MenuItem>
      <MenuItem href="http://stackoverflow.com/users/6421202/nick-west" target="_blank"><img src="/img/30pxstack.png" /></MenuItem>
      <MenuItem href="https://www.linkedin.com/in/nick-west-67471742" target="_blank"><img src="/img/30pxlinked.png" /></MenuItem>
      <MenuItem href="mailto:mail@nickwe.st" target="_top"><img src="/img/30pxemail.png" /></MenuItem>

    </Drawer>
    <AppBar onLeftIconButtonTouchTap={this.handleToggle} title="Nick We.st">
      <div className="navLinks">
          <Link to="/"><FlatButton rippleColor="pink" style={navStyle}>About </FlatButton></Link>
          <Link to="/portfolio"><FlatButton style={navStyle}>Nick's Work</FlatButton></Link>
          <FlatButton href="https://www.github.com/njwest" target="_blank" style={navImg}><img src="/img/30pxgit.png" /></FlatButton>
          <FlatButton href="http://stackoverflow.com/users/6421202/nick-west" target="_blank" style={navImg}><img src="/img/30pxstack.png" /></FlatButton>
          <FlatButton href="https://www.linkedin.com/in/nick-west-67471742" target="_blank" style={navImg}><img src="/img/30pxlinked.png" /></FlatButton>
          <FlatButton href="mailto:mail@nickwe.st" target="_top" style={navImg}><img src="/img/30pxemail.png" /></FlatButton>
      </div>
    </AppBar>
      {this.props.children}
    </div>;
  }
};
