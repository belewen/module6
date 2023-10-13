import React, { useReducer } from "react";
import ReducerComponent from "./components/Reducer/ReducerComponent";
import LoadingComponent from "./components/callBack/CallbackComponents";
import LayoutEffect from "./components/layoutEffect/LayoutEffect";
import Container from "./components/imperativeHandle/Container";
import Provider from "./components/context/Provider";
import Children, { OtherChildren } from "./components/context/Childrens";
import styles from "./App.module.css";
import Users from "./components/custumHooks/Users";

function App() {
  return (
    <div className={styles.app} style={{}}>
      <h1 style={{ backgroundColor: "grey" }}>Les hooks avancés</h1>
      <ReducerComponent></ReducerComponent>
      <hr />
      <LoadingComponent></LoadingComponent>
      <hr />
      <LayoutEffect></LayoutEffect>
      <Container></Container>
      <h1>Les provider</h1>
      <Provider>
        <Children></Children>
        <OtherChildren></OtherChildren>
      </Provider>
      <Users></Users>
    </div>
  );
}

export default App;
