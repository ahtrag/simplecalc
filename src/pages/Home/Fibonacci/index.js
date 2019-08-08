import React from "react";
import { ContextProvider, Context } from "./FibonacciState";
import { TextField, Typography, Grid } from "@material-ui/core";

const FiboNumber = () => {
  return (
    <div>
      <ContextProvider>
        <Context.Consumer>
          {({ state, dispatch, fibonacciSeries }) => (
            <div>
              <Grid container direction="column">
                <Grid item>
                  <TextField
                    type="number"
                    placeholder="number of fibonacci"
                    onChange={e =>
                      e.target.value
                        ? dispatch({
                            type: "FIBO_RESULT",
                            value: fibonacciSeries(parseInt(e.target.value))
                          })
                        : dispatch({ type: "INITIAL_STATE" })
                    }
                  />
                </Grid>
                <Grid item>
                  <Typography>{state.fibonacciNumbers.join(", ")}</Typography>
                </Grid>
              </Grid>
            </div>
          )}
        </Context.Consumer>
      </ContextProvider>
    </div>
  );
};

export default FiboNumber;
