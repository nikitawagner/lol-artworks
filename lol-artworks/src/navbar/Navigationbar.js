import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

export default function Navigationbar() {
  return (
    <Navbar expand="lg" className="navbarDiv" sticky="top">
      <Container>
        <Navbar.Brand href="#home">
          <span className="brand">LoL Artworks</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <div className="linkDiv">
            <div className="link">
              <p>link1</p>
            </div>
            <div className="link">
              <p>link2</p>
            </div>
            <div className="link">
              <p>about</p>
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
