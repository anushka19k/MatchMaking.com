import React from "react";
import "../App.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <Navbar className="topnavvbar" collapseOnSelect expand="lg" variant="dark">
      <Container className="topnavv">
      <Link to={"/"}><Navbar.Brand>MatchMaking.com</Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link><Link to={"/login"}><p className="navbtns">Register</p></Link></Nav.Link>
            <Nav.Link><p className="navbtns">Help</p></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
