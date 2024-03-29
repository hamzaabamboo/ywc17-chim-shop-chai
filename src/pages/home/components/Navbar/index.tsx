import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./style.css";

export const CustomNavbar: React.FC<{
  links: { label: string; href: string }[];
}> = ({ links }) => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed="top">
      <Navbar.Brand href="#home">
        <img
          alt="Logo"
          className="d-xs-inline d-lg-none"
          src="assets/logo/footer.png"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mx-auto">
          {(links || []).map((link) => (
            <Nav.Link key={link.href} href={link.href}>
              <strong>{link.label}</strong>
            </Nav.Link>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
