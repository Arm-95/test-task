import React from "react";
import styles from "./header.module.css";
import { Container, Row, Col } from "react-bootstrap";
const Header = () => {
  return (
    <Container>
      <Row>
        <Col lg={4}>
          <section className={styles.section_header}>
            <div className={styles.logo_box}>
              <img src="./assets/vector.png" alt="" />
            </div>
          </section>
        </Col>
        <Col lg={4}>
          <div>
            <ul>
              <li>FAQ</li>
              <li>Оплата и доставка</li>
              <li>Возврат</li>
              <li>Исследования</li>
              <li>Личный кабинет</li>
              <li>8 8 (800) 600-09-90</li>
            </ul>
          </div>
        </Col>
        <Col lg={4}></Col>
      </Row>
    </Container>
  );
};

export default Header;
