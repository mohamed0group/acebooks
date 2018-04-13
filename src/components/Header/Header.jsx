import React from 'react';
import {
    Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem,Col,ListGroup,
    Dropdown, DropdownToggle, DropdownMenu, DropdownItem,Card,Button,Row,NavLink,
    Container, InputGroup, InputGroupAddon, Input,CardGroup,CardTitle, CardDeck, CardImgOverlay
} from 'reactstrap';
import { Cat } from 'components';


import { HashRouter, Route, Switch, Link } from 'react-router-dom';

// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from 'perfect-scrollbar';
import logo from "logo-white.svg";

var ps;

class Header extends React.Component{
    constructor(props) {
        super(props);
        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            isOpen: false,
            dropdownOpen: false,
            collapsed: true

        };
        this.toggle = this.toggle.bind(this);
        this.dropdownToggle = this.dropdownToggle.bind(this);
    }


  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
    componentDidMount(){
        if(navigator.platform.indexOf('Win') > -1){
            ps = new PerfectScrollbar(this.refs.header,{suppressScrollX: true, suppressScrollY: false});
        }
    }
    componentWillUnmount(){
        if(navigator.platform.indexOf('Win') > -1){
            ps.destroy();
        }
    }
    toggle() {

        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    dropdownToggle(e){
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    // function that adds color white/transparent to the navbar on resize (this is for the collapse)
    render(){
        return (
            // add or remove classes depending if we are on full-screen-maps page or not
            <div ref="header" className="text-dark">
            <Navbar color="dark" light>
            
                <Container fixed data-color="black">
               
                <Row>
                        <Nav > 
                        <Col>
                            <Dropdown  nav isOpen={this.state.dropdownOpen} toggle={(e) => this.dropdownToggle(e)}>
                            <DropdownToggle caret nav>
                            <i className="now-ui-icons users_single-02"></i>
                                    <p>
                                        <span className="d-lg-none d-md-block">Account</span>
                                    </p>
                            </DropdownToggle>
                            <DropdownMenu className="bg-dark" left>
                                <DropdownItem tag="a" >
                                <Link to="/signup" activeClassName="active" className=" nav-link">
                                Signup
                                </Link>
                            </DropdownItem>
                                <DropdownItem tag="a">
                                <Link to="/login" activeClassName="active" className="nav-link">
                                Login
                                </Link>
                            </DropdownItem>
                                <DropdownItem tag="a" >
                                <Link to="/logout" activeClassName="active" className="nav-link">
                                Logout
                                </Link>
                            </DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                            </Col>
                            <Col>
                            <NavItem>
                                <Link to="#pablo" className="nav-link">
                                    <i className="now-ui-icons media-2_sound-wave"></i>
            						<p>
                                        <span className="d-lg-none d-md-block">Stats</span>
                                    </p>
                                </Link>
                            </NavItem>
                            </Col> 
                            <Col>
                        <NavbarToggler color="light" onClick={this.toggleNavbar} className="mr-2"vv/>     
                        </Col>
                            
                            </Nav>
                            </Row>

                             <Collapse isOpen={!this.state.collapsed} navbar>
                            <Row>
                        <form  > 
                            <InputGroup className=" no-border">
                                <Input length='15' className="bg-light" placeholder="Search..." />
                                <InputGroupAddon><i className="now-ui-icons ui-1_zoom-bold"></i></InputGroupAddon>
                            </InputGroup>
                        </form>
                        <Cat/> 
            </Row>
            </Collapse>
            </Container>
            </Navbar>
                
            </div>
 );
}
}

export default Header;