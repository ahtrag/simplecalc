import React, { Fragment } from "react";
import { ContextProvider, Context } from "./CalculatorState";
import { Button, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const Calculator = () => {
  const classes = useStyles();
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
            <div>
              <Paper elevation={24} style={{ height: "fit-content" }}>
                <div style={{ maxWidth: "256px", margin: "50px auto" }}>
                  <Typography align="right" variant="body2">
                    {!state.resultValue ||
                    (!state.num1 && !state.num2 && !state.operator)
                      ? ""
                      : state.resultValue}
                  </Typography>
                  <Typography align="right" variant="h4">
                    {state.num2
                      ? state.num2
                      : state.num1
                      ? state.num1
                      : !state.num1 &&
                        !state.num2 &&
                        !state.operator &&
                        !state.resultValue
                      ? 0
                      : state.resultValue}
                  </Typography>
                  <div>
                    <Button
                      className={classes.button}
                      children="7"
                      onClick={() => toggleButton("7")}
                    />
                    <Button
                      className={classes.button}
                      children="8"
                      onClick={() => toggleButton("8")}
                    />
                    <Button
                      className={classes.button}
                      children="9"
                      onClick={() => toggleButton("9")}
                    />
                    <Button
                      className={classes.button}
                      children="C"
                      onClick={() => resetButton()}
                    />
                  </div>
                  <div>
                    <Button
                      className={classes.button}
                      children="4"
                      onClick={() => toggleButton("4")}
                    />
                    <Button
                      className={classes.button}
                      children="5"
                      onClick={() => toggleButton("5")}
                    />
                    <Button
                      className={classes.button}
                      children="6"
                      onClick={() => toggleButton("6")}
                    />
                    <Button
                      className={classes.button}
                      children="+"
                      onClick={() => toggleOperator("+")}
                    />
                  </div>
                  <div>
                    <Button
                      className={classes.button}
                      children="1"
                      onClick={() => toggleButton("1")}
                    />
                    <Button
                      className={classes.button}
                      children="2"
                      onClick={() => toggleButton("2")}
                    />
                    <Button
                      className={classes.button}
                      children="3"
                      onClick={() => toggleButton("3")}
                    />

                    <Button
                      className={classes.button}
                      children="x"
                      onClick={() => toggleOperator("*")}
                      style={{ textTransform: "lowercase" }}
                    />
                  </div>
                  <div style={{ display: "flex" }}>
                    <Button
                      className={classes.button}
                      children="0"
                      onClick={() => toggleButton("0")}
                      style={{ flex: 1 }}
                    />
                    <Button
                      className={classes.button}
                      children="="
                      onClick={() => equalButton()}
                    />
                  </div>
                </div>
              </Paper>
            </div>
          )}
        </Context.Consumer>
      </ContextProvider>
    </Fragment>
  );
};

const useStyles = makeStyles(theme => ({
  button: {
    border: "2px solid #ddd"
  }
  // typography: {
  //   tex
  // }
}));

export default Calculator;
