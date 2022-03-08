import React from "react";
import GlobalStyle from "./Global/globalstyles";

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <h1>Hello</h1>
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
