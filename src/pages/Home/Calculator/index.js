import React, { Fragment } from "react";
import { ContextProvider, Context } from "./CalculatorState";
import { Button } from "@material-ui/core";

const Calculator = () => {
  return (
    <Fragment>
      <ContextProvider>
        <Context.Consumer>
          {({
            state,
            dispatch,
            toggleButton,
            toggleOperator,
            resetButton,
            equalButton
          }) => (
            <div style={{ maxWidth: "256px" }}>
              {/* {state.resultValue}
              <br />
              {state.num1}
              <br />
              {state.operator}
              <br />
              {state.num2}
              <br /> */}
              {state.resultValue ? state.resultValue : ""} <br />
              {state.num2 ? state.num2 : state.num1 ? state.num1 : ""}
              <div>
                <Button children="7" onClick={() => toggleButton("7")} />
                <Button children="8" onClick={() => toggleButton("8")} />
                <Button children="9" onClick={() => toggleButton("9")} />
                <Button children="C" onClick={() => resetButton()} />
              </div>
              <div>
                <Button children="4" onClick={() => toggleButton("4")} />
                <Button children="5" onClick={() => toggleButton("5")} />
                <Button children="6" onClick={() => toggleButton("6")} />
                <Button children="+" onClick={() => toggleOperator("+")} />
              </div>
              <div>
                <Button children="1" onClick={() => toggleButton("1")} />
                <Button children="2" onClick={() => toggleButton("2")} />
                <Button children="3" onClick={() => toggleButton("3")} />

                <Button
                  children="x"
                  onClick={() => toggleOperator("*")}
                  style={{ textTransform: "lowercase" }}
                />
              </div>
              <div style={{ display: "flex" }}>
                <Button
                  children="0"
                  onClick={() => toggleButton("0")}
                  style={{ flex: 1 }}
                />
                <Button children="=" onClick={() => equalButton()} />
              </div>
            </div>
          )}
        </Context.Consumer>
      </ContextProvider>
    </Fragment>
  );
};

export default Calculator;
