import React from 'react';
import { TabContent, TabPane, Nav, NavItem,
     Card, Button, NavLink, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import PerfectScrollbar from 'perfect-scrollbar';

import SmokeWater from 'assets/video/SmokeWater.mp4';
var ps;
class Cat extends React.Component{
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
          activeTab: '1'
        };
        super(...arguments);
        this.state= {
        route: window.location.hash.substr(1)
        };
      }
    // verifies if routeName is the one active (in browser input)
   
    componentDidMount(){
      window.addEventListener('hashchange', () => {
        this.setState({
        route: window.location.hash.substr(1)
        });
        });
        if(navigator.platform.indexOf('Win') > -1){
            ps = new PerfectScrollbar(this.refs.cat,{suppressScrollX: true, suppressScrollY: false});
        }
    }
    componentWillUnmount(){
        if(navigator.platform.indexOf('Win') > -1){
            ps.destroy();
        }
    }
      toggle(tab) {
        if (this.state.activeTab !== tab) {
          this.setState({
            activeTab: tab
          });
        }
      }
    render(){
      return (
            <div ref="cat">
            
             <Nav tabs width="100%" height="100%" inlineBlock>
              <NavItem >
              <Link to="/" activeClassName="active">
              <NavLink  className={classnames({ active: this.state.activeTab === '1' })}
                      onClick={() => { this.toggle('1'); }}>
                          Home
            </NavLink>
            </Link>
          </NavItem>
          <NavItem>
          <Link to='/catogrageis' >
            <NavLink 
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}>
                      Catogrageis
            </NavLink>
            </Link>
          </NavItem>
          <NavItem>
          <Link to='/blog'>
          <NavLink  className={classnames({ active: this.state.activeTab === '7' })}
                      onClick={() => { this.toggle('7'); }}>
                      Blog
            </NavLink>
            </Link>
          </NavItem>
          <NavItem>
          <Link to='/about'>
          <NavLink  className={classnames({ active: this.state.activeTab === '3' })}
            onClick={() => { this.toggle('3'); }}>
                      About
            </NavLink>
            </Link>
          </NavItem>
          <NavItem>
          <Link to='/maps'>
          <NavLink  className={classnames({ active: this.state.activeTab === '5' })}
                      onClick={() => { this.toggle('5'); }}
                     >
                     Maps
            </NavLink>
            </Link>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                <h5>Ace Books</h5>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="3">
            <Row>
              <Col  xs="12">
              <video src={SmokeWater} width="100%" height="100%" autoplay loop controls></video>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2" width="100%" height="100%"> 
          </TabPane>
        </TabContent> 
            </div>
                  );
                }
            }
            
            export default Cat;

