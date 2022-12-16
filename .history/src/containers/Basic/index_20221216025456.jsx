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
              <div className={styles.right_section}>
                <h1 className={styles.title}>АКТИВИРУЙ ИММУНИТЕТ!</h1>
                <p className={styles.subTitile}>
                  Всего пять секунд в день помогут укрепить иммунитет и повысить
                  защитные силы организма
                </p>
                <div className={styles.second_section_descrition}>
                  <h3>NOOTRIS ПОМОГАЕТ</h3>
                  <p>Вашему организму во время пандемии и сезонных простуд</p>
                </div>
              </div>
            </Col>
            <Col sm={12} md={6} lg={6}>
              <div className={styles.left_section}>
                <div className={styles.first_img}>
                  <img src="./assets/ginger.png" alt="" />
                </div>
                <div className={styles.second_img}>
                  <img src="./assets/nootris.png" alt="" />
                </div>
                <div className={styles.thirds_img}>
                  <img src="./assets/lemon.png" alt="" />
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </sectionn>
  );
};

export default Basic;
