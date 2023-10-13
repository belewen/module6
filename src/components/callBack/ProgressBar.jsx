import React from "react";

function ProgressBar({ value, max, color, text }) {
  console.log(`Je suis dans ProgressBar ${text}`);
  return (
    <div style={{ border: `solid 4px ${color}`, padding: "10px" }}>
      <progress value={value} max={max}></progress>;<p>Loading : {value} %</p>
    </div>
  );
}

export default React.memo(ProgressBar);
