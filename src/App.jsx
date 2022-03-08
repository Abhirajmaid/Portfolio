import React from "react";
import NormalizeStyle from "./Global/normalizeStyle";
import { Home } from "./pages";

export const App = () => {
  return (
    <>
      <NormalizeStyle />
      <Home />
    </>
  );
};

// const [loading, setLoding] = useState(false);
// useEffect(() => {
//   setLoding(true);
//   setTimeout(() => {
//     setLoding(false);
//   }, 2000);
// }, []);
