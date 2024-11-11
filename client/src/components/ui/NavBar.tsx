import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export default function NavBar(): JSX.Element {
  return (
    <>
      <Navbar className="mb-3" bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink className="nav-link" to="/">
              Posts
            </NavLink>
            <NavLink className="nav-link" to="/stat">
              Statistics
            </NavLink>
            <NavLink className="nav-link" to="/count">
              Counter
            </NavLink>
          </Nav>

          <Nav>
            <NavLink className="nav-link" to="/auth">
              Auth
            </NavLink>
            <NavLink className="nav-link" to="/login">
              Login
            </NavLink>
            <NavLink className="nav-link" to="/">
              Logout
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
