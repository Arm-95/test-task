import React from "react";
import styles from "./header.module.css";
import { Container, Row, Col } from "react-bootstrap";
const Header = () => {
  return (
    <Container>
      <Row>
        <Col lg={4}>
          {" "}
          <section className={styles.section_header}>
            <div className={styles.logo_box}>
              <img src="./assets/vector.png" alt="" />
            </div>
          </section>
        </Col>
        <Col lg={4}></Col>
        <Col lg={4}></Col>
      </Row>
    </Container>
  );
};

export default Header;
