import React, { useReducer } from "react";

const initialState = {
  fibonacciNumbers: []
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FIBO_RESULT":
      return { ...state, fibonacciNumbers: action.value };
    case "INITIAL_STATE":
      return { ...initialState };
    default:
      return state;
  }
};

const Context = React.createContext();

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fibonacciSeries = n => {
    if (n === 0 || undefined) {
      return [];
    } else if (n === 1) {
      return [0];
    } else if (n === 2) {
      return [0, 1];
    } else {
      var s = fibonacciSeries(n - 1);
      s.push(s[s.length - 1] + s[s.length - 2]);
      return s;
    }
  };

  return (
    <Context.Provider
      value={{
        state,
        dispatch,
        fibonacciSeries
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { Context, ContextProvider };
