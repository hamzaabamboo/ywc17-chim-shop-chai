import React from "react";
import { Row, Container, Col } from "react-bootstrap";
import "./style.css";

export const Banner: React.FC = () => {
  return (
    <div className="banner">
      <div className="stack">
        <Container fluid>
          <Row>
            <Col
              id="left"
              style={{
                backgroundImage: `url("assets/hero_banner/banner-left.png")`,
              }}
            ></Col>
            <Col
              id="mid"
              style={{
                backgroundImage: `url("assets/hero_banner/banner-center.png")`,
              }}
            ></Col>
            <Col
              id="right"
              style={{
                backgroundImage: `url("assets/hero_banner/banner-right.png")`,
              }}
            ></Col>
          </Row>
        </Container>
        <div className="logo w-100 h-100 d-flex align-items-center">
          <img alt="Banner" src="assets/logo/banner.png" />
        </div>
      </div>
    </div>
  );
};
