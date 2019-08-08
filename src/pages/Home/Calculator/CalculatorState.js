import React, { useReducer, useEffect } from "react";

const initialState = {
  resultValue: 0,
  operator: "",
  num1: 0,
  num2: 0
};

const reducer = (state, action) => {
  switch (action.type) {
    case "RESET_VALUE":
      return {
        ...initialState
      };
    case "INSERT_NUMBER":
      return {
        ...state,
        [action.key]:
          state[action.key] && !Boolean(action.override)
            ? state[action.key] + action.value
            : action.value
      };
    case "INSERT_OPERATOR":
      return {
        ...state,
        resultValue: state.resultValue + action.value,
        operator: action.value
      };
    default:
      return state;
  }
};

const Context = React.createContext();

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {});

  const toggleButton = number => {
    if (!state.num1 && !state.operator && !state.num2) {
      dispatch({ type: "RESET_VALUE" });
    }

    dispatch({
      type: "INSERT_NUMBER",
      key: state.operator ? "num2" : "num1",
      value: number
    });
  };

  const toggleOperator = operator => {
    const oldOperator = state.operator ? state.operator : operator;

    dispatch({
      type: "INSERT_NUMBER",
      key: "resultValue",
      value: state.num2 ? state.num2 : state.num1
    });
    dispatch({ type: "INSERT_OPERATOR", value: operator });

    let number1 = parseInt(state.num1);
    let number2 = parseInt(state.num2);

    if (number2) {
      switch (oldOperator) {
        case "+":
          dispatch({
            type: "INSERT_NUMBER",
            key: "num1",
            override: true,
            value: `${number1 + number2}`
          });
          break;
        case "*":
          dispatch({
            type: "INSERT_NUMBER",
            key: "num1",
            override: true,
            value: `${number1 * number2}`
          });
          break;
        default:
          break;
      }

      dispatch({
        type: "INSERT_NUMBER",
        key: "num2",
        override: true,
        value: 0
      });
    }
  };

  const resetButton = () => {
    dispatch({ type: "RESET_VALUE" });
  };

  const equalButton = () => {
    let number1 = parseInt(state.num1);
    let number2 = parseInt(state.num2);
    let operator = state.operator;

    if (number2) {
      dispatch({ type: "RESET_VALUE" });

      switch (operator) {
        case "+":
          dispatch({
            type: "INSERT_NUMBER",
            key: "resultValue",
            override: true,
            value: `${number1 + number2}`
          });
          break;
        case "*":
          dispatch({
            type: "INSERT_NUMBER",
            key: "resultValue",
            override: true,
            value: `${number1 * number2}`
          });
          break;
        default:
          break;
      }
    }
  };

  return (
    <Context.Provider
      value={{
        state,
        dispatch,
        toggleButton,
        toggleOperator,
        resetButton,
        equalButton
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { Context, ContextProvider };
