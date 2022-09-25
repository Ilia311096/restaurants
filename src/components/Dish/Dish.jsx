import React, { useState } from "react";

import styles from "./styles.module.css";

import classnames from "classnames";
import { Modal } from "../Modal/Modal";

export const Dish = ({ dishName, count, increment, decrement, className }) => {
  const [isOpen, setIsOpen] = useState(false);

  if (!dishName) {
    return null;
  }

  return (
    <div className={classnames(styles.root, className)}>
      {isOpen && (
        <Modal>
          <span className={styles.dishName} onClick={() => setIsOpen(false)}>
            {dishName}
          </span>
        </Modal>
      )}
      <span className={styles.dishName} onClick={() => setIsOpen(true)}>
        {dishName}
      </span>
      <div className={styles.actions}>
        <button onClick={decrement} className={styles.action}>
          -
        </button>
        {count}
        <button onClick={increment} className={styles.action}>
          +
        </button>
      </div>
    </div>
  );
};

export const MemoDish = React.memo(Dish);
