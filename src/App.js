import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./page/Home";
import PastTrial from "./page/PastTrial";
import HowItWorks from "./page/HowItWorks";
import LogIn from "./page/LogIn";

function App() {
  return (
    <Switch>
      <Route path="/past-trial" component={PastTrial}></Route>
      <Route path="/how-it-works" component={HowItWorks}></Route>
      <Route path="/log-in" component={LogIn}></Route>
      <Route path="/" component={Home}></Route>
    </Switch>
  );
}

export default App;
