import React from 'react';
import {HashRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Base from './components/baseList/base';
export default () =>{
  return <Router>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/page1" component={Base}/>
    </Switch>
  </Router>
}