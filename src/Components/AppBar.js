import { calculateNewValue } from "@testing-library/user-event/dist/utils";
import { useState } from "react";
import { Button, Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function AppBar() {
  const [showMob, setShowMob] = useState(false);
  const [isNav, setIsNav] = useState(true);
  const navFet = isNav ? "bolder" : "";
  const navPri = !isNav ? "bolder" : "";
  return (
    <Navbar className="position-fixed w-100 py-3">
      <Container>
        <div className="d-flex">
          <Navbar.Brand>
            <Link to="/">
              <img src="./Assets/Logo.svg" alt="logo" />
            </Link>
          </Navbar.Brand>
          <DesktopNavItem
            isNav={isNav}
            setIsNav={setIsNav}
            navFet={navFet}
            navPri={navPri}
          />
        </div>
        <Button
          className="d-none d-md-block py-3 px-4"
          style={{
            background: "#1d1b67",
            borderColor: "#1d1b67",
          }}
        >
          Start Scheduling
        </Button>
        <Button
          className="d-md-none"
          variant=""
          onClick={() => setShowMob(true)}
        >
          <img src="./Assets/Hamburger Menu.svg" alt="" />
        </Button>
        <MobileNavOffCanva
          show={showMob}
          setShowMob={setShowMob}
          isNav={isNav}
          setIsNav={setIsNav}
          navFet={navPri}
          navPri={navPri}
        />
      </Container>
    </Navbar>
  );
}

function DesktopNavItem({ isNav, setIsNav, navFet, navPri }) {
  return (
    <Nav className="d-none d-md-flex">
      <Nav.Link style={{}}>
        <Link
          style={{
            textDecoration: "none",
            color: "inherit",
            fontWeight: navFet,
          }}
          onClick={() => setIsNav(true)}
          to="/"
        >
          Features
        </Link>
      </Nav.Link>
      <Nav.Link style={{}}>
        <Link
          style={{
            textDecoration: "none",
            color: "inherit",
            fontWeight: navPri,
          }}
          onClick={() => setIsNav(false)}
          to="/pricing"
        >
          Pricing
        </Link>
      </Nav.Link>
    </Nav>
  );
}

function MobileNavOffCanva({ show, setShowMob, navFet, navPri }) {
  return (
    <Offcanvas placement="end" show={show}>
      <Offcanvas.Header
        closeButton
        className="ms-auto p-4 fs-1"
        onClick={() => setShowMob(false)}
      />
      <Offcanvas.Body className="d-flex flex-column align-items-center justify-content-start gap-5">
        <Link
          style={{
            textDecoration: "none",
            color: "inherit",
            fontWeight: navFet,
          }}
          to="/"
          onClick={() => setShowMob(false)}
        >
          Features
        </Link>
        <Link
          style={{
            textDecoration: "none",
            color: "inherit",
            fontWeight: navPri,
          }}
          to="/pricing"
          onClick={() => setShowMob(false)}
        >
          Pricing
        </Link>
      </Offcanvas.Body>
    </Offcanvas>
  );
}
