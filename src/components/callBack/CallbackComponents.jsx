import React, { useState, useCallback } from "react";
import ButtonForwardLoading from "./Buttons";
import ProgressBar from "./ProgressBar";

const MAX_LOADING_BAR = 100;

function LoadingComponent() {
  console.log("Chargement de LoadingComponent");
  const [firstLoad, setFirstLoad] = useState(10);
  const [secondLoad, setSecondLoad] = useState(30);

  const increaseFirstLoad = useCallback(() => {
    console.log("Je suis dans increaseFirstLoad");
    setFirstLoad((prevValue) => {
      if (prevValue < MAX_LOADING_BAR) {
        return prevValue + 10;
      }
      return prevValue;
    });
  }, [firstLoad]);

  const increaseSecondLoad = useCallback(() => {
    console.log("Je suis dans increaseSecondLoad");
    setSecondLoad((prevValue) => {
      if (prevValue < MAX_LOADING_BAR) {
        return prevValue + 10;
      }
      return prevValue;
    });
  }, [secondLoad]);

  return (
    <div>
      <h1>Les callBack</h1>
      <p>
        Ouvrez la console pour voir les log de chargement de fonction et
        composants
      </p>
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
        Deuxième chargement +10%
      </ButtonForwardLoading>
    </div>
  );
}

export default LoadingComponent;
