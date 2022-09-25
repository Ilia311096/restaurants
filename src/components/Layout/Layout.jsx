import { Header } from "../Header/Header";
import { useState } from "react";

export const Layout = ({ children, footer }) => {
  /*   const [state, setState] = useState(0); */
  return (
    <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
      {/*       <button onClick={() => setState(state + 1)}>{state}</button> */}
      <Header />
      <div>{children}</div>
      {footer}
    </div>
  );
};
