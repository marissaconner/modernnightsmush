import React, { Component } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";

const SiteNavigation = () => (
  <Navbar variant="dark" expand="lg">
    <div className="container">
      <Navbar.Brand href="#home">Modern Nights</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#link">Make A Character</Nav.Link>
          <Nav.Link href="#link">Policies</Nav.Link>
          <Nav.Link href="#link">Staff Training</Nav.Link>
          <Nav.Link href="#link">Help Files</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link>Sign Up</Nav.Link>

          <Button>Log In</Button>
        </Nav>
      </Navbar.Collapse>
    </div>
  </Navbar>
);
export default SiteNavigation;
