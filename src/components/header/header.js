import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const linkStyle = {
  color: "white",
};

const Header = ({ title }) => {
  return (
    <div style={{ position: "sticky" }} className="mb-3">
      <Navbar bg="light" expand="lg" bg="info" variant="dark">
        <Link to="/">
          <Navbar.Brand>{title}</Navbar.Brand>
        </Link>
        <div>
          <Link to="sign-up">
            <Button variant="outline-light" className="mr-2">
              Sign Up
            </Button>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </div>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/">
              <Nav.Link as="a">Home</Nav.Link>
            </Link>
            <Link to="/sign-in" style={linkStyle}>
              <Nav.Link as="a">Sign In</Nav.Link>
            </Link>
            <Link to="/dashboard" style={linkStyle}>
              <Nav.Link as="a">Dashboard</Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
