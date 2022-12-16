import React from "react";
import styles from "./header.module.css";
import { Container, Row, Col } from "react-bootstrap";
const Header = () => {
  return (
    <section className={styles.header_section}>
      <Container>
        <div className={styles.header_inContaiener}>
          <Row>
            <Col lg={2}>
              <div className={styles.logo_box}>
                <img src="./assets/vector.png" alt="" />
              </div>
            </Col>
            <Col lg={8}>
              <div className={styles.menu_block}>
                <ul className={styles.menu_box}>
                  <li>FAQ</li>
                  <li>Оплата и доставка</li>
                  <li>Возврат</li>
                  <li>Исследования</li>
                  <li>Личный кабинет</li>
                  <li>8 8 (800) 600-09-90</li>
                </ul>
              </div>
            </Col>
            <Col lg={2}>
              <div className={styles.basket_box}>
                <p>basket</p>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Header;
