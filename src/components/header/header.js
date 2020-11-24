import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = ({ title }) => {
  return (
    <div style={{ position: "sticky" }} className="mb-3">
      <Navbar expand="lg" bg="info" variant="dark">
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
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/sign-in" className="nav-link">
              Sign In
            </Link>
            <Link to="/dashboard" className="nav-link">
              Dashboard
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
