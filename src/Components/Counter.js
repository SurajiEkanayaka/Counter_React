/* eslint-disable react/jsx-no-undef */

import { Component } from 'react';
import React from 'react';
import { MDBBtn } from 'mdbreact';
import {  MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import { MDBAnimation } from "mdbreact";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
    MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";
    import { BrowserRouter as Router } from 'react-router-dom';
    import logo from '../components/images/logo.png';
    import "../components/Counter.css";

  

    

class Counter extends Component {
    state={
        count : 0 //for count
    }    
    increment = () => {        
        this.setState({
            count : this.state.count + 1           
        }); 
        console.log(this.state.count);        
    }

    incrementa = () => {
    this.setState({
        count : this.state.count - 1       
        });
        console.log(this.state.count);
    }

    
    render() {
        return (
            
            
            <>
         
            <Router>
      <MDBNavbar color="default-color" dark expand="md" className="nav"> 
        <MDBNavbarBrand>
        <img src={logo} className="img-fluid" alt="" style={{width:50,height:50}}/>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem active>
              <MDBNavLink to="#!">Home</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!">Features</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!">Pricing</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <div className="d-none d-md-inline">Dropdown</div>
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default">
                  <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <MDBIcon icon="user" />
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default" ml-5>
                  <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
         
        </MDBCollapse>
      </MDBNavbar>
    </Router>

    
                

    <MDBCol style={{ maxWidth: "22rem"}}>
      <MDBCard >
        <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg"
          waves />
        <MDBCardBody>
          <MDBCardTitle><MDBAnimation text-center type="bounce" infinite className="font-weight-bold"> Buy ME -30%</MDBAnimation></MDBCardTitle>
          <MDBCardText>Some quick example text to build on the card title and make up the bulk of the card's content.</MDBCardText>
          <center>
                <div>Contity : {this.state.count} </div>
                <MDBBtn onClick={this.increment} style={{color: "blue", backgroundColor:"white",}}>+</MDBBtn>
                <MDBBtn onClick={this.incrementa} style={{color: "red", backgroundColor:"white"}}>-</MDBBtn>
                </center>
          <MDBBtn href="#">add to cart</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
    
    
                      
               
                
            
               
             </>
              
            
        );
        
    }
    
}

export default Counter;