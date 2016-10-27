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

          <Row>
            <Col xs={12} md={7}>
              <Card className="card">
                <div className="cardContent">
                  <img src="/img/nickwest.png" className="biopic" id="nickpic"/>
                    <p><strong>Nick West</strong> is a higher education professional and full-stack JavaScript & PHP developer who currently serves as the Instructional Designer of the <a href="http://dsw.socialwork.rutgers.edu" target="_blank">Rutgers Doctor of Social Work (DSW) Program</a>. Nick is now working on ReactJS and React Native applications with MySQL and MongoDB. He is currently learning GraphQL and Realm database architecture.
                  </p>
                  <p>
                    An avid musician who loves neo-soul and jazz, Nick co-founded the New Jersey chapter of Classical Revolution and can be spotted in the wild at jazz clubs around the NY metro area. His research interests include Human-Computer Interaction, digital consciousness, identity, and modern media.
                  </p>
                  <p>Regarding media, Nick West is a long-time advocate of local journalism who serves on the board of <a href="http://www.newbrunswicktoday.com" target="_blank"><em>New Brunswick Today</em></a>. Nick established <em>New Brunswick Today</em>'s print newspaper operation.
                  </p>
                </div>
              </Card>
            </Col>
            <Col xs={12} md={5}>
              <Card className="card">
                <div className="cardContent">
                  <Row>
                    <Col xs={6}>
                      <RaisedButton label="Nick's Resume" primary={true} href="/resume/nick-west-resume.pdf" target="_blank"/>
                    </Col>
                    <Col xs={6}>
                      <RaisedButton label="Email Nick" secondary={true} href="mailto:mail@nickwe.st" target="_top"/>
                    </Col>
                  </Row>
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
