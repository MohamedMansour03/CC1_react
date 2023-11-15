import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-dark navbar-dark">
      <Container>
        <Navbar.Brand href="#home" className='logo'>Mes projets</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link as={NavLink} to='/' className='l'>TP1</Nav.Link>
            <Nav.Link as={NavLink} to='/TP2' className='l'>TP2</Nav.Link>
            <Nav.Link as={NavLink} to='/TP3' className='l'>TP3</Nav.Link>
            <Nav.Link as={NavLink} to='/TP4' className='l'>TP4</Nav.Link>
            <Nav.Link as={NavLink} to='/TP5' className='l'>TP5</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;




