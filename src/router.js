import React, { Component } from 'react';
import {HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import Login from './pages/login/index';
import Buttons from './pages/ui/buttons';
import Modals from './pages/ui/modals';
import NotFound from './pages/NotFound';

class Router extends Component{
  render(){
    return(
      <HashRouter>
        <Route path="/admin" render={()=>
          <App>
            <Switch>
              <Route exact path="/admin" component={Home}/>
              <Route path="/admin/ui/buttons" component={Buttons}/>
              <Route path="/admin/ui/modals" component={Modals}/>
              <Route path="/404" component={NotFound}/>
            </Switch>
          </App>
        } />
        <Route path="/login" component={Login} />
        <Route path='/' exact render={()=> (<Redirect to="/admin" />)}/>
      </HashRouter>
    )
  }
}
export default Router;