import React from 'react';
import {HashRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
export default () =>{
  return <Router>
    <Switch>
      <Route exact path="/" component={Home}/>
    </Switch>
  </Router>
}