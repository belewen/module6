import React from "react";

const actions = {
  increment: "increment",
  decrease: "decrease",
  reset: "reset",
};

function reducer(state, action) {
  switch (action.type) {
    case actions.increment: {
      return { count: state.count + action.payload };
    }
    case actions.decrease: {
      return { count: state.count - action.payload };
    }
    case actions.reset: {
      return { count: 0 };
    }
    default:
      throw new Error("ce cas n'est pas géré");
  }
}

export default function ReducerComponent() {
  const [state, dispatch] = React.useReducer(reducer, { count: 5 });
  return (
    <div id="reducer">
      <h1>Les reducers</h1>
      <p>Compteur : {state.count}</p>
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
            dispatch({ type: actions.increment, payload: 5 });
          }}
        >
          Increment step 5
        </button>
        <button
          style={{ backgroundColor: "red" }}
          onClick={() => dispatch({ type: actions.decrease, payload: 2 })}
        >
          Decrease step 2
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
