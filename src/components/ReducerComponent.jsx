import React from "react";

const actions = {
  increment: "increment",
  decrease: "decrease",
  reset: "reset",
};
const MAX_GUESS = 50;
const GUESS_NUMBER = Math.ceil(Math.random() * MAX_GUESS);

function reducer(state, action) {
  switch (action.type) {
    case actions.increment: {
      if (state.resultUser <= MAX_GUESS - action.payload) {
        return {
          resultUser: state.resultUser + action.payload,
          errorRange: false,
        };
      } else {
        return { ...state, resultUser: state.resultUser, errorRange: true };
      }
    }
    case actions.decrease: {
      if (state.resultUser >= action.payload) {
        return {
          resultUser: state.resultUser - action.payload,
          errorRange: false,
        };
      } else {
        return { ...state, resultUser: state.resultUser, errorRange: true };
      }
    }
    case actions.reset: {
      return { resultUser: 0 };
    }
    default:
      throw new Error("ce cas n'est pas géré");
  }
}

export default function ReducerComponent() {
  const [state, dispatch] = React.useReducer(reducer, {
    resultUser: MAX_GUESS / 2,
    errorRange: false,
    isResultSuperior: null,
    isResultEqual: false,
  });

  function printResult(value) {
    switch (true) {
      case value === GUESS_NUMBER:
        return `Vous avez trouvé le bon résultat ${GUESS_NUMBER}`;
      case value > GUESS_NUMBER:
        return "Votre nombre est trop grand";
      case value < GUESS_NUMBER:
        return "Votre nombre est trop petit";
      default:
        throw new Error("Ce cas n'est pas géré");
    }
  }

  return (
    <div id="reducer">
      <h1>Les reducers</h1>
      <p style={{ border: "solid 1px black", padding: 20 }}>
        Devine un nombre entre 0 et {MAX_GUESS}
      </p>

      <p style={{ fontSize: 25, fontWeight: "bold" }}>
        Votre réponse : {state.resultUser}
      </p>
      {state.errorRange ? (
        <p style={{ color: "red" }}>
          Le nombre à deviner est entre 0 et {MAX_GUESS}
        </p>
      ) : null}
      {state.resultUser > GUESS_NUMBER}
      <p style={{ color: "blue" }}>{printResult(state.resultUser)}</p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "auto",
          gap: 10,
        }}
      >
        <button
          style={{ backgroundColor: "green", height: 30, fontSize: 20 }}
          onClick={() => {
            dispatch({ type: actions.increment, payload: 1 });
          }}
        >
          Increment step 1
        </button>
        <button
          style={{ backgroundColor: "green", height: 30, fontSize: 20 }}
          onClick={() => {
            dispatch({ type: actions.increment, payload: 5 });
          }}
        >
          Increment step 5
        </button>
        <button
          style={{ backgroundColor: "red" }}
          onClick={() => dispatch({ type: actions.decrease, payload: 1 })}
        >
          Decrease step 1
        </button>
        <button
          style={{ backgroundColor: "red" }}
          onClick={() => dispatch({ type: actions.decrease, payload: 5 })}
        >
          Decrease step 5
        </button>
        <button
          style={{ backgroundColor: "grey" }}
          onClick={() => dispatch({ type: actions.reset })}
        >
          reset to 0
        </button>
      </div>
    </div>
  );
}
