import React from "react";
import { Tab } from "../Tab/Tab";

import styles from "./styles.module.css";

export const Tabs = ({ tabIds, renderTab }) => (
  <div className={styles.root}>
    {tabIds.map((id) =>
      renderTab({
        id,
        className: styles.tab,
      })
    )}
  </div>
);
