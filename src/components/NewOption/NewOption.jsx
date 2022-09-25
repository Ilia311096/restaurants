import styles from "./styles.module.css";
import { useContext } from "react";
import { SelectValueContext } from "../Select/Select";

export const NewOption = ({ value }) => {
  const { selectedOption, onSelect } = useContext(SelectValueContext);
  return (
    <div onClick={() => onSelect(value)} className={styles.root}>
      {value} - {selectedOption === value ? "yes" : "no"}
    </div>
  );
};
