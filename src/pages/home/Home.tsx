import React from "react";
import { getData, API_URL, PanJSApiResponse } from "../../core/api";
import { useObservable } from "rxjs-hooks";
import { CustomNavbar } from "./components/Navbar";
import { Banner } from "./components/Banner";
import { Footer } from "./components/Footer";
import "./style.css";
import { Container, Col, Row } from "react-bootstrap";
import { map } from "rxjs/operators";
import { purifier } from "../../core/library/purify";

export const Home: React.FC = () => {
  const res$ = getData<PanJSApiResponse>(API_URL).pipe(
    map((res) => {
      return {
        ...res,
        navbarItems: [
          { label: "ลงทะเบียนเข้าร่วมมาตรการ", href: "#1" },
          { label: "ขั้นตอนการเข้าร่วม", href: "#2" },
          { label: "ร้านค้าที่เข้าร่วม", href: "#3" },
        ],
        detail:
          purifier.sanitize(res.detail) ||
          `<p>ผู้สนใจเข้าร่วมมาตรการส่งเสริมการท่องเที่ยวในประเทศ “ชิมช้อปใช้” รับเงินผ่าน "เป๋าตัง" (G-Wallet) จำนวน 10 ล้านคน ลงทะเบียนรับสิทธิ ได้ทางเว็บไซต์ www.ชิมช้อปใช้.com
        ตั้งแต่วันที่ 23 กันยายน - 15 พฤศจิกายน 2562 (รับลงทะเบียน วันละ 1 ล้านคน ต่อเนื่อง ทุกวัน จนกว่าจะครบ 10 ล้านคน)</p>
        `,
        duration: purifier.sanitize(res.duration) || `27 ก.ย. - 30 พ.ย. 62`,
        condition:
          purifier.sanitize(res.condition) ||
          `<ol><li>เป็นบุคคลสัญชาติไทย มีบัตรประจำตัวประชาชน</li><li>มีอายุตั้งแต่ 18 ปีบริบูรณ์ขึ้นไป ณ วันที่ลงทะเบียน</li><li>มีโทรศัพท์มือถือสมาร์ทโฟนที่สามารถเชื่อมต่อสัญญาณอินเทอร์เน็ตและมีอีเมล</li></ol>`,
      };
    })
  );
  const { navbarItems, detail, duration, condition } =
    useObservable<PanJSApiResponse>(() => res$, {
      navbarItems: [],
      detail: "Loading...",
      duration: "Loading...",
      condition: "Loading...",
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
            <img alt="KTB SQ " src="assets/Banner_KTB_SQ.png" />
          </Col>
          <Col xs={12} md={4}>
            <img alt="CGD SQ" src="assets/Banner_CGD_Sq.png" />
          </Col>
          <Col xs={12} md={4}>
            <img alt="TAT SQ" src="assets/Banner_TAT_Hotline_Sq.png" />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="ministries">
          <Col xs={4} md={2}>
            <img alt="MOF" src="assets/brand-logo/MOF.png" />
          </Col>
          <Col xs={4} md={2}>
            <img alt="FPO " src="assets/brand-logo/FPO.png" />
          </Col>
          <Col xs={4} md={2}>
            <img alt="CGD" src="assets/brand-logo/CGD.png" />
          </Col>
          <Col xs={4} md={2}>
            <img alt="Krungthai" src="assets/brand-logo/Krungthai.png" />
          </Col>
          <Col xs={4} md={2}>
            <img alt="MOTS" src="assets/brand-logo/MOTS.png" />
          </Col>
          <Col xs={4} md={2}>
            <img alt="TAT" src="assets/brand-logo/TAT.png" />
          </Col>
        </Row>
      </Container>
      <Footer links={navbarItems} />
    </>
  );
};
