import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./style.css";

export const Footer: React.FC = () => {
  return (
    <footer>
      <Container fluid>
        <Container>
          <Row>
            <Col xs={12} md={3}>
              <img src="https://www.ชิมช้อปใช้.com/img/logo/footer.png" />
            </Col>
            <Col xs={12} md={3}>
              <h4>ข้อมูลลงทะเบียนประชาชน</h4>
              <p>
                การรับสิทธิ การใช้งานแอปพลิเคชั่น “เป๋าตัง” และ “ถุงเงิน”
                <br />
                ติดต่อ ชิมช้อปใช้ Call Center by Krungthai โทร.0 2111 1144
              </p>
            </Col>
            <Col xs={12} md={3}>
              <h4>ข้อมูลลงทะเบียนผู้ประกอบการ</h4>
              <p>
                เงื่อนไขและวิธีการเข้าร่วมมาตรการฯ
                <br />
                ติดต่อ โทร.0 2270 6400 กด 7
              </p>
            </Col>
            <Col xs={12} md={3}>
              <h4>ข้อมูลเที่ยวชิมช้อปใช้</h4>
              <p>
                ติดต่อ ททท.
                <br />
                โทร1672
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid>
        <Container>
          <Row>
            <Col xs={12} md={3}>
              Copyright © 2003-2019
            </Col>
            <Col xs={12} md={3}>
              ลงทะเบียนเข้าร่วมมาตรการ
            </Col>
            <Col xs={12} md={3}>
              ขั้นตอนการเข้าร่วมทั้งหมด
            </Col>
            <Col xs={12} md={3}>
              รายชื่อร้านค้าที่เข้าร่วมรายการ
            </Col>
          </Row>
        </Container>
      </Container>
    </footer>
  );
};
