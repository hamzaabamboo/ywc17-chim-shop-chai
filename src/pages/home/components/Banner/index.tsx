import React from "react";
import { Row, Container, Col } from "react-bootstrap";
import "./style.css";

export const Banner: React.FC = () => {
  return (
    <div className="banner">
      <div className="stack">
        <Container fluid>
          <Row>
            <Col id="left"></Col>
            <Col id="mid"></Col>
            <Col id="right"></Col>
          </Row>
        </Container>
        <div className="logo w-100 h-100 d-flex align-items-center">
          <img
            alt="Banner"
            src="https://www.ชิมช้อปใช้.com/img/logo/banner.png"
          />
        </div>
      </div>
    </div>
  );
};
