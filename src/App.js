import React from 'react';
import {HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import Base from './components/baseList/base';

export default () =>{
  return <Router>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/admin/ui/buttons" component={Base}/>
      <Redirect from="/*" to="/" />
    </Switch>
  </Router>
}