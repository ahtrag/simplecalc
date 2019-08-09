import React from "react";
import { ContextProvider, Context } from "./PrimeNumberState";
import { TextField, Typography, Grid, Paper } from "@material-ui/core";

const PrimeNumber = () => {
  return (
    <div>
      <ContextProvider>
        <Context.Consumer>
          {({ state, dispatch, primeNumber }) => (
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
                      placeholder="number of prime"
                      label="Total of Prime Number"
                      onKeyDown={e =>
                        e.keyCode !== 8 &&
                        e.target.value.length === 5 &&
                        e.preventDefault()
                      }
                      onChange={e =>
                        e.target.value.length < 5
                          ? primeNumber(parseInt(e.target.value))
                          : e.preventDefault()
                      }
                    />
                  </Grid>
                </Grid>
              </Paper>
              <Grid container>
                <Grid item style={{ margin: "50px" }}>
                  <Grid container>
                    {state.primeNumbers.length > 0
                      ? state.primeNumbers.map(number => (
                          <Grid
                            item
                            key={number}
                            xs={1}
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

export default PrimeNumber;
