import React from "react";
import "../App.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import MatchMaking from "../Images/matchmakingshit.png";
import { MyVerticallyCenteredModal } from "./HelpModal";

function NavBar() {

  const [modalShow, setModalShow] = React.useState(false);

  return (
    <Navbar className="topnavvbar" collapseOnSelect expand="lg" variant="dark">
      <Container className="topnavv">
      <Link className="navlinks" to={"/"}><Navbar.Brand>
          <img className="imageLogo" src={MatchMaking} alt={"matchmaking"}/>MatchMaking.com
        </Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link><Link className="navlinks" to={"/login"}><p className="navbtns">Register</p></Link></Nav.Link>
            <Nav.Link onClick={() => setModalShow(true)}><p className="navbtns">Help</p></Nav.Link>
            <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
