import React from "react";
import styles from "./basic.module.css";
import { Container, Row, Col } from "react-bootstrap";
const Basic = () => {
  return (
    <sectionn>
      <Container>
        <div className={styles.bacground_box}>
          <Row>
            <Col sm={12} md={6} lg={6}>
              <div>АКТИВИРУЙ ИММУНИТЕТ!</div>
            </Col>
            <Col sm={12} md={6} lg={6}></Col>
          </Row>
        </div>
      </Container>
    </sectionn>
  );
};

export default Basic;
