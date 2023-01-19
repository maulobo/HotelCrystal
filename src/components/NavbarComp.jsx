import { NavLink, Link, Outlet } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../images/logo.png";
import "./navbar.css";
import { useTranslation } from "react-i18next";
import React, { useState } from "react";
import es from "../images/es.png";
import en from "../images/en.png";
import "../pages/srv.css";
import { CSSTransition } from "react-transition-group";

const NavbarComp = () => {
  const [isEnter, setIsEnter] = useState(false);
  const [t, i18n] = useTranslation();
  function changeEnglish() {
    i18n.changeLanguage("en");
  }
  function changeSpanish() {
    i18n.changeLanguage("es");
  }
  return (
    <>
      <Navbar sticky="top" className="navBg color" expand="lg" bg="bg-*">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img src={logo} alt="logo" className="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav ">
            <Nav className="me-auto ">
              <Nav.Link
                as={NavLink}
                className={({ isActive }) => (isActive ? "active" : "")}
                to="/"
                onClick={() => {
                  setIsEnter((value) => !value);
                }}
              >
                Home
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                onClick={() => {
                  setIsEnter((value) => !value);
                }}
                className={({ isActive }) => (isActive ? "active" : "")}
                to="/servicios"
              >
                Servicios
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  setIsEnter((value) => !value);
                }}
                as={NavLink}
                className={({ isActive }) => (isActive ? "active" : "")}
                to="/contacto"
              >
                Contacto
              </Nav.Link>
              <Nav.Link>
                <button className="idiom-btn" onClick={changeEnglish}>
                  <img className="es-en" src={en} alt="" />
                </button>
                <button className="idiom-btn" onClick={changeSpanish}>
                  <img className="es-en" src={es} alt="" />
                </button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <CSSTransition in={isEnter} timeout={1000} classNames="myclass">
        <section>
          <Outlet />
        </section>
      </CSSTransition>
    </>
  );
};

export default NavbarComp;
