import ReactDOM from "react-dom";
import styles from "./styles.module.css";

export const Modal = ({ children }) => {
  return ReactDOM.createPortal(
    <div className={styles.root}>{children}</div>,
    document.getElementById("modal-container")
  );
};
