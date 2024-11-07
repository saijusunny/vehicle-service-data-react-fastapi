import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const TopNavbar = () => {
  return (
    
    <Navbar bg="light" expand="lg" className="shadow-sm p-3">
      <Container fluid>
        <Navbar.Brand href="/">Dashboard</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarResponsive" />
        <Navbar.Collapse id="navbarResponsive">
          <Nav className="ms-auto ">
            <Nav.Link href="#notifications">Notifications</Nav.Link>
            <Nav.Link href="#profile">Profile</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  );
};

export default TopNavbar;
