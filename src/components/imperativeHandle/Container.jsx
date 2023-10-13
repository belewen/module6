import React, { useRef } from "react";
import InputInnerContainer from "./InputInnerContainer";

function Container() {
  const refInput = React.useRef(null);
  const applyFocus = () => {
    refInput.current.focus();
    refInput.current.maxCount();
  };

  return (
    <div style={{ marginBottom: 30 }}>
      <h1>UseImperativeHandler</h1>
      <InputInnerContainer ref={refInput}></InputInnerContainer>
      <button onClick={applyFocus}>Faire le focus</button>
    </div>
  );
}

export default Container;
