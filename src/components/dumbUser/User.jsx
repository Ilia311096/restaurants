import styles from "./styles.module.css";
import classnames from "classnames";

export const User = ({ userName, className, onClick }) => {
  return (
    <div className={classnames(styles.root, className)}>
      {userName}
      <button onClick={onClick}>ClickMe</button>
    </div>
  );
};
