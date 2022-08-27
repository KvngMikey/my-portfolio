import React from 'react';
import './Navigation.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navigation = () => {
  return (
    <div>
      <Navbar variant="light">
        <Container>
          <Navbar.Brand className="name">Michael Ariwaodo</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link className="nav-link" href="/">
              Home
            </Nav.Link>
            <Nav.Link className="nav-link" href="/about">
              About
            </Nav.Link>
            <Nav.Link className="nav-link" href="/services">
              Services
            </Nav.Link>
            <Nav.Link className="nav-link" href="/skills">
              Skills
            </Nav.Link>
            <Nav.Link className="nav-link" href="/contact">
              Contact
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
