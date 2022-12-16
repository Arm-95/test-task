import React from "react";
import styles from "./header.module.css";
import { Container, Row, Col } from "react-bootstrap";
const Header = () => {
  return (
    <Container mt 5>
      <section className={styles.section_header}>
        <div className={styles.logo_box}>
          <img src="./assets/vector.png" alt="" />
        </div>
      </section>
    </Container>
  );
};

export default Header;
