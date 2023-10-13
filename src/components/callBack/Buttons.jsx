import React from "react";

function ButtonForwardLoading({ color, children, handleClick, text }) {
  console.log(`Je suis dans ButtonForwardLoad ${text}`);
  return (
    <button
      onClick={handleClick}
      style={{ backgroundColor: color, margin: 10, height: 40 }}
    >
      {children}
    </button>
  );
}

export default React.memo(ButtonForwardLoading);
