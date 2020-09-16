import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import Home from './Components/Home';
import Quiz from './Components/Quiz';
import Result from './Components/Result';
// import NotFound from './Components/NotFound';


function RouteConfig() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/quiz/:type" component={Quiz}></Route>
          <Route exact path="/result" component={Result}></Route>
          <Route exact path="*" component={Home}></Route>
        </Switch>

    </Router>


    </div>
  );
}

export default RouteConfig;
