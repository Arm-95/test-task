import React from "react";
import styles from "./header.module.css";
import { Container, Row, Col } from "react-bootstrap";
const Header = () => {
  return (
    <Container>
      <section className={styles.section_header}>
        <div className={styles.logo_box}>
          <p>asdad</p>
        </div>
      </section>
    </Container>
  );
};

export default Header;
