import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Tabs, Tab, AppBar, CssBaseline } from "@material-ui/core/";
import TabPanel from "../../components/TabPanel";
import Calculator from "./Calculator";
import PrimeNumber from "./PrimeNumber";
import Fibonacci from "./Fibonacci";

const Home = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab label="Calculator" {...idProps(0)} />
          <Tab label="Prime Number" {...idProps(1)} />
          <Tab label="Fibonacci" {...idProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Calculator />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <PrimeNumber />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Fibonacci />
      </TabPanel>
    </div>
  );
};

function idProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  }
}));

export default Home;
