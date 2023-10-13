import React from "react";
import { ContextColor } from "./Provider";

function Children() {
  const bgColor = React.useContext(ContextColor);
  return (
    <div>
      <p style={{ color: "white", backgroundColor: bgColor }}>
        J'utilise le "red" du Provider
      </p>
    </div>
  );
}

export function OtherChildren() {
  const bgColor = React.useContext(ContextColor);
  return (
    <button style={{ color: "white", backgroundColor: bgColor }}>
      Je suis un bouton et moi aussi
    </button>
  );
}

export default Children;
