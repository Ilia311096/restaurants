import React from "react";
import Logo from "./imgs/logo.svg";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className={styles.root}>
      <Link to="/" className={styles.logo}>
        <img src={Logo} loading="lazy" />
      </Link>

      <Link to="/restaurants" className={styles.link}>
        Restaurant
      </Link>
      <Link to="/cart" className={styles.link}>
        Cart
      </Link>
    </header>
  );
};
