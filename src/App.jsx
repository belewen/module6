import React, { useReducer } from "react";
import ReducerComponent from "./components/ReducerComponent";

function App() {
  return (
    <div
      id="app"
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <ReducerComponent></ReducerComponent>
    </div>
  );
}

export default App;
