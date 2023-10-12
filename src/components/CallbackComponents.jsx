import React, { useState } from "react";

const MAX_LOADING_BAR = 100;

function LoadingComponent() {
  console.log("Chargement de LoadingComponent");
  const [firstLoad, setFirstLoad] = useState(10);
  const [secondLoad, setSecondLoad] = useState(30);

  function increaseFirstLoad() {
    console.log("Je suis dans increaseFirstLoad");
    if (firstLoad < MAX_LOADING_BAR) {
      setFirstLoad(firstLoad + 10);
    }
  }

  function increaseSecondLoad() {
    console.log("Je suis dans increaseSecondLoad");
    if (secondLoad < MAX_LOADING_BAR) {
      setSecondLoad(secondLoad + 10);
    }
  }

  return (
    <div>
      <h1>Les callBack</h1>
      <ProgressBar
        value={firstLoad}
        max={MAX_LOADING_BAR}
        color={"red"}
        text="first"
      ></ProgressBar>
      <br />
      <ProgressBar
        value={secondLoad}
        max={MAX_LOADING_BAR}
        color={"green"}
        text="second "
      ></ProgressBar>
      <br />
      <ButtonForwardLoading
        text="first"
        color="red"
        handleClick={increaseFirstLoad}
      >
        Premier chargement +10%
      </ButtonForwardLoading>
      <ButtonForwardLoading
        text="second "
        color="green"
        handleClick={increaseSecondLoad}
      >
        Deuxième chargement -10%
      </ButtonForwardLoading>
    </div>
  );
}

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

function ProgressBar({ value, max, color, text }) {
  console.log(`Je suis dans ProgressBar ${text}`);
  return (
    <div style={{ border: `solid 4px ${color}`, padding: "10px" }}>
      <progress value={value} max={max}></progress>;<p>Loading : {value} %</p>
    </div>
  );
}

export default LoadingComponent;
