import React from "react";
import { ContextProvider, Context } from "./PrimeNumberState";
import { TextField, Typography, Grid } from "@material-ui/core";

const PrimeNumber = () => {
  return (
    <div>
      <ContextProvider>
        <Context.Consumer>
          {({ state, dispatch, primeNumber }) => (
            <div>
              <Grid container direction="column">
                <Grid item>
                  <TextField
                    type="number"
                    placeholder="number of prime"
                    onChange={e => primeNumber(parseInt(e.target.value))}
                  />
                </Grid>
                <Grid item>
                  <Typography>{state.primeNumbers.join(", ")}</Typography>
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
