import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink,Container } from 'reactstrap';
import { Parallax } from "react-parallax";
import image1 from './hero-min.jpg'
import logo from './logo.png'

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (<div>
      
     
        <Navbar color="fade" light>

          <NavbarBrand  className="mr-auto">UcoÑam</NavbarBrand>
          <NavbarBrand className="mr-auto"><img src={logo} style={{height:'50px', width:'auto'}}></img></NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="/ofertas/">Ofertas</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        </div>
        
      
      
      
       
       
        
     

    );
  }
}