import React, { useReducer } from "react";
import ReducerComponent from "./components/ReducerComponent";
import LoadingComponent from "./components/CallbackComponents";

function App() {
  return (
    <div
      id="app"
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <ReducerComponent></ReducerComponent>
      <br />
      <LoadingComponent></LoadingComponent>
    </div>
  );
}

export default App;
