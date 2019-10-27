import React from "react";
import { getData, API_URL, PanJSApiResponse } from "../../core/api";
import { useObservable } from "rxjs-hooks";
import { CustomNavbar } from "./components/Navbar";
import { Banner } from "./components/Banner";
import { Footer } from "./components/Footer";
import "./style.css";
import { Container, Col, Row } from "react-bootstrap";

export const Home: React.FC = () => {
  const res$ = getData<PanJSApiResponse>(API_URL);
  const { navbarItems, detail, duration, condition } = useObservable<
    PanJSApiResponse
  >(() => res$, {
    navbarItems: [],
    detail: "Loading...",
    duration: "Loading...",
    condition: "Loading..."
  });

  return (
    <>
      <CustomNavbar links={navbarItems}></CustomNavbar>
      <Banner></Banner>
      <div className="duration text-center conter-fluidd-flex flex-column justify-content-center align-items-center">
        <div>ตั้งแต่วันที่</div>
        <h2>
          <strong>{duration}</strong>
        </h2>
        <div className="register-box">
          <button className="btn register">
            ลงทะเบียน เฟส 2<br />
            ตั้งแต่วันที่ 24 ต.ค.62 วันละ 2 รอบ เวลา 6.00 และ 18.00 น.
            <br />
            (จำกัดผู้ลงทะเบียนรอบละ 5 แสนคน รวม 1 ล้านคนต่อวัน)
          </button>
          <hr />
        </div>
      </div>
      <Container className="detail">
        <Row>
          <Col>
            <div>
              <h3>
                <strong>
                  มาตรการส่งเสริมการบริโภค
                  <br />
                  ในประเทศ “ชิมช้อปใช้”
                </strong>
              </h3>
              <p dangerouslySetInnerHTML={{ __html: detail }}></p>
              <p>
                <strong>เงื่อนไขการเข้าร่วมมาตรการ</strong>
              </p>
              <p dangerouslySetInnerHTML={{ __html: condition }}></p>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="call-centers">
          <Col xs={12} md={4}>
            <img src="https://www.ชิมช้อปใช้.com/img/Banner_KTB_SQ.png" />
          </Col>
          <Col xs={12} md={4}>
            <img src="https://www.ชิมช้อปใช้.com/img/Banner_CGD_Sq.png" />
          </Col>
          <Col xs={12} md={4}>
            <img src="https://www.ชิมช้อปใช้.com/img/Banner_TAT_Hotline_Sq.png" />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="ministries">
          <Col xs={4} md={2}>
            <img src="https://www.ชิมช้อปใช้.com/img/brand-logo/MOF.png" />
          </Col>
          <Col xs={4} md={2}>
            <img src="https://www.ชิมช้อปใช้.com/img/brand-logo/FPO.png" />
          </Col>
          <Col xs={4} md={2}>
            <img src="https://www.ชิมช้อปใช้.com/img/brand-logo/CGD.png" />
          </Col>
          <Col xs={4} md={2}>
            <img src="https://www.ชิมช้อปใช้.com/img/brand-logo/Krungthai.png" />
          </Col>
          <Col xs={4} md={2}>
            <img src="https://www.ชิมช้อปใช้.com/img/brand-logo/MOTS.png" />
          </Col>
          <Col xs={4} md={2}>
            <img src="https://www.ชิมช้อปใช้.com/img/brand-logo/TAT.png" />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};
