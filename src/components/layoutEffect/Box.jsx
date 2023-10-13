import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import Content from "./Content";

function Box() {
  const [height, setHeight] = useState(100);
  const refDiv = useRef(null);

  // Changer ici  le useLayoutEffect par useEffect pour voir la différence
  useLayoutEffect(() => {
    if (refDiv.current.offsetHeight < 150) {
      setHeight(height + 100);
    }
  }, [height]);

  const boxStyle = {
    border: "solid 2px black",
    backgroundColor: height < 150 ? "blue" : "red",
    height: `${height}px`,
    width: 500,
    marginBottom: 200,
  };
  return (
    <div style={boxStyle} ref={refDiv}>
      <Content></Content>
    </div>
  );
}

export default Box;
