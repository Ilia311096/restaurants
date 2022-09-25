import React, { useMemo, useState } from "react";

export const SelectValueContext = React.createContext();

export const Select = ({ children }) => {
  const [selectedOption, setSelectedOption] = useState();
  const [isOpen, setISOpen] = useState(false);

  const contextValue = useMemo(
    () => ({
      selectedOption,
      onSelect: (value) => {
        setSelectedOption(value);
        setISOpen(false);
      },
    }),
    [selectedOption]
  );

  return (
    <div>
      {
        <p onClick={() => setISOpen(!isOpen)}>
          {selectedOption || "Chose option"}
        </p>
      }

      <SelectValueContext.Provider value={contextValue}>
        {isOpen && <div>{children}</div>}
      </SelectValueContext.Provider>
    </div>
  );
};
