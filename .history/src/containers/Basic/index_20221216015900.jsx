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
              <div>
                <h1>АКТИВИРУЙ ИММУНИТЕТ!</h1>
                <p>
                  Всего пять секунд в день помогут укрепить иммунитет и повысить
                  защитные силы организма
                </p>
              </div>
            </Col>
            <Col sm={12} md={6} lg={6}></Col>
          </Row>
        </div>
      </Container>
    </sectionn>
  );
};

export default Basic;
