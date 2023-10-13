import React from "react";

export const ContextColor = React.createContext();

function Provider({ children }) {
  const [bgColor] = React.useState("red");
  return (
    <ContextColor.Provider value={bgColor}>{children}</ContextColor.Provider>
  );
}

export default Provider;
