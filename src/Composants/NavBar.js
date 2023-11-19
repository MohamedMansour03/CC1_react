import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { AppContext } from './AppContext';
import './NavBar.css';

function NavBar() {
  const { isDarkMode, toggleDarkMode } = useContext(AppContext);

  const handleChange = () => {
    toggleDarkMode();
    document.body.style.backgroundColor = isDarkMode ? 'white' : 'black';
  };

  return (
    <Navbar expand="lg" className="navbar">
      <Container>
        <Navbar.Brand href="#home" className='logo'>Mes projets</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="btn-light" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link as={NavLink} to='/TP1' className='l'>TP1</Nav.Link>
            <Nav.Link as={NavLink} to='/TP2' className='l'>TP2</Nav.Link>
            <Nav.Link as={NavLink} to='/TP3' className='l'>TP3</Nav.Link>
            <Nav.Link as={NavLink} to='/TP4' className='l'>TP4</Nav.Link>
          </Nav>
          <div className="form-check form-switch">
            <input  className="form-check-input" onChange={handleChange}  type="checkbox"
              checked={isDarkMode}
            />
          </div>
          <label className="form-check-label">
            <FontAwesomeIcon style={{ color: isDarkMode ? 'black' : 'white' }} icon={isDarkMode ?  faMoon :faSun } />
          </label>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
