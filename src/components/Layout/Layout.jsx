import { Header } from "../Header/Header";
import { useState } from "react";

export const Layout = ({ children, footer }) => {
  const [state, setState] = useState(0);
  return (
    <div>
      <button onClick={() => setState(state + 1)}>{state}</button>
      <Header />
      <div>{children}</div>
      {footer}
    </div>
  );
};
