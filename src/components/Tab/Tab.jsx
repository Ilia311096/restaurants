import React, { useContext } from "react";

import classnames from "classnames";

import styles from "./styles.module.css";
import { NavLink } from "react-router-dom";

export const Tab = ({ title, to, className }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        classnames(styles.root, className, {
          [styles.rootActive]: isActive,
        })
      }
    >
      {title}
    </NavLink>
  );
};
