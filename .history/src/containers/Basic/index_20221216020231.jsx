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
                <div>
                  <h3>NOOTRIS ПОМОГАЕТ</h3>
                  <p>Вашему организму во время пандемии и сезонных простуд</p>
                </div>
              </div>
            </Col>
            <Col sm={12} md={6} lg={6}>
              <div className={styles.left_section}>
                <div className={styles.firdt_img}></div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </sectionn>
  );
};

export default Basic;
