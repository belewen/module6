import React, { useState } from "react";

const InputInnerContainer = React.forwardRef((props, ref) => {
  const inputRef = React.useRef(null);
  const [count, setCount] = useState(0);

  React.useImperativeHandle(ref, () => ({
    focus: () => {
      if (count === 4) {
        inputRef.current.style.borderColor = "red";
      }
    },
    maxCount: () => {
      if (count < 5) {
        setCount(count + 1);
      }
    },
  }));
  return (
    <div>
      <p>
        Lorsque le compteur atteidra 5, une bordure rouge s'appliquera à l'input
      </p>
      <p style={{ fontWeight: "bolder" }}>Le compteur : {count}</p>
      <label htmlFor="name">Rien à saisir </label>
      <input
        ref={inputRef}
        type="text"
        name="name"
        placeholder="Rien à saisir"
      ></input>
    </div>
  );
});

export default InputInnerContainer;
