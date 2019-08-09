import React from "react";
import { ContextProvider, Context } from "./FibonacciState";
import { TextField, Typography, Grid, Paper } from "@material-ui/core";

const FiboNumber = () => {
  return (
    <div>
      <ContextProvider>
        <Context.Consumer>
          {({ state, dispatch, fibonacciSeries }) => (
            <div>
              <Paper
                elevation={24}
                style={{ height: "fit-content", padding: "20px" }}
              >
                <Grid
                  container
                  alignItems="center"
                  justify="center"
                  direction="column"
                >
                  <Grid item>
                    <TextField
                      type="number"
                      placeholder="number of fibonacci"
                      label="Total of Fibonacci Number"
                      onKeyDown={e =>
                        e.keyCode !== 8 &&
                        e.target.value.length === 4 &&
                        e.preventDefault()
                      }
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
                </Grid>
              </Paper>
              <Grid container>
                <Grid item style={{ margin: "50px" }}>
                  <Grid container>
                    {state.fibonacciNumbers.length > 0
                      ? state.fibonacciNumbers.map(number => (
                          <Grid
                            item
                            key={number}
                            xs={3}
                            style={{ padding: "10px" }}
                          >
                            <Paper elevation={4} style={{ padding: "10px" }}>
                              <Typography align="center">{number}</Typography>
                            </Paper>
                          </Grid>
                        ))
                      : null}
                  </Grid>
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
