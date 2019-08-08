import React, { useReducer } from "react";

const initialState = {
  primeNumbers: []
};

const reducer = (state, action) => {
  switch (action.type) {
    case "PRIME_RESULT":
      return { ...state, primeNumbers: action.value };
    default:
      return state;
  }
};

const Context = React.createContext();

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const primeNumber = n => {
    var counter = 0;
    var number = 2;
    var arrayTemp = [];
    while (counter < n) {
      var notPrime = false;

      for (var i = 2; i <= number; i++) {
        if (number % i === 0 && number !== i) {
          notPrime = true;
          break;
        }
      }
      if (notPrime === false) {
        arrayTemp.push(number);
        counter++;
      }
      number++;
    }
    dispatch({ type: "PRIME_RESULT", value: arrayTemp });
  };

  return (
    <Context.Provider
      value={{
        state,
        dispatch,
        primeNumber
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { Context, ContextProvider };
