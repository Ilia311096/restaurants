import { useContext } from "react";
import { SelectValueContext } from "../Select/Select";

export const Option = ({ value }) => {
  const { selectedOption, onSelect } = useContext(SelectValueContext);
  return (
    <div onClick={() => onSelect(value)}>
      Chose me - {value} - {selectedOption === value ? "yes" : "no"}
    </div>
  );
};
