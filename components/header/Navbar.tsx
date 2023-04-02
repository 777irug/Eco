import React from 'react';
import {Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useState } from 'react';


export const MyNavbar=()=> {

  const [show, setShow] = useState(false);
const showDropdown = ()=>{
    setShow(!show);
}
const hideDropdown = () => {
    setShow(false);
}


    return (
            <Navbar bg="transparent" variant="dark" expand="lg">
            
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="Dropdown" 
   id="collasible-nav-dropdown" 
   show={show}
   onMouseEnter={showDropdown} 
   onMouseLeave={hideDropdown}
   >
                    <NavDropdown.Item href="#action/3.1"style={{color:" black"}}>Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2"style={{color:" black"}}>Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3"style={{color:" black"}}>Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4" style={{color:" black"}}>Separated link</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Dropdown1" 
   id="collasible-nav-dropdown1" 
   show={show}
   onMouseEnter={showDropdown} 
   onMouseLeave={hideDropdown}
   >
                    <NavDropdown.Item href="#action/3.1"style={{color:" black"}}>Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2"style={{color:" black"}}>Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3"style={{color:" black"}}>Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4" style={{color:" black"}}>Separated link</NavDropdown.Item>
                </NavDropdown>
                </Nav>

            </Navbar.Collapse>
            </Navbar>
    )
}