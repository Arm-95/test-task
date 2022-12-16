import React from "react";
import styles from "./basic.module.css";
import { Container, Row, Col } from "react-bootstrap";
const Basic = () => {
  return (
    <>
      <sectionn>
        <Container>
          <div className={styles.bacground_box}>
            <Row>
              <Col sm={12} md={6} lg={6}>
                <div className={styles.right_section}>
                  <h1 className={styles.title}>АКТИВИРУЙ ИММУНИТЕТ!</h1>
                  <p className={styles.subTitile}>
                    Всего пять секунд в день помогут укрепить иммунитет и
                    повысить защитные силы организма
                  </p>
                  <div className={styles.second_section_descrition}>
                    <h3>NOOTRIS ПОМОГАЕТ</h3>
                    <p>Вашему организму во время пандемии и сезонных простуд</p>
                  </div>
                </div>
              </Col>
              <Col sm={12} md={6} lg={6}>
                <div className={styles.left_section}>
                  <img src="./assets/grup.png" alt="" />
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </sectionn>
      <section>
        <Container>
          <div className={styles.second_section}>
            <h2 className={styles.title_second}>
              ПОЛУЧИ ЗАЩИТУ ИММУНИТЕТА
              <span>СО СКИДКОЙ -15% ПЕРВЫМ!</span>
            </h2>
            <div className={styles.sales}>
              <del>750₽</del>
              <p>690₽</p>
            </div>
            <div>
              <Row>
                <Col sm={12} md={6} lg={4}>
                  <div className={styles.img_block}>
                    <img src="./assets/1.png" alt="" />
                    <p>Содержит</p>
                    <span>имбирь</span>
                  </div>
                </Col>
                <Col sm={12} md={6} lg={4}>
                  <div className={styles.img_block}>
                    <img src="./assets/2.png" alt="" />
                    <p>+ Бесплатная доставка</p>
                    <span>Специальная цена</span>
                  </div>
                </Col>
                <Col sm={12} md={6} lg={4}>
                  <div className={styles.img_block}>
                    <img src="./assets/vorus.png" alt="" />
                    <div>
                      <p>Нейтрализует </p>
                      <span>вирусы</span>
                    </div>
                  </div>
                </Col>
              </Row>

              <div className={styles.button_box}>
                <button>Оформить заказ!</button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Basic;
