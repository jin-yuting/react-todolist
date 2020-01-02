import React, { Component } from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import Login from './pages/login/login';
import Register from './pages/login/register';
import Buttons from './pages/ui/buttons';
import Modals from './pages/ui/modals';
import basicTable from './pages/table/basicTable';
import NotFound from './pages/NotFound';

class Router extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/admin" render={() =>
            <App>
              <Route path="/admin/home" component={Home} />
              <Route path="/admin/ui/buttons" component={Buttons} />
              <Route path="/admin/ui/modals" component={Modals} />
              <Route path="/admin/table/basicTable" component={basicTable} />
              <Route path="/404" component={NotFound} />
            </App>
          } />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Redirect form="/*" to="/admin/home" />
        </Switch>
      </HashRouter>
    )
  }
}
export default Router;