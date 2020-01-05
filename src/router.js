import React, { Component } from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import Login from './pages/login/login';
import Register from './pages/login/register';
import Buttons from './pages/ui/buttons';
import Modals from './pages/ui/modals';
import BasicTable from './pages/table/basicTable';
import CityTable from './pages/table/cityTable';
import NotFound from './pages/NotFound';

class Router extends Component {
  render() {
    return (
      <HashRouter>
        <Route path="/admin" render={() =>
          <App>
            <Switch>
              <Route path="/admin/home" component={Home} />
              <Route path="/admin/ui/buttons" component={Buttons} />
              <Route path="/admin/ui/modals" component={Modals} />
              <Route path="/admin/table/basic" component={BasicTable} />
              <Route path="/admin/table/city" component={CityTable} />
              <Route path="/404" component={NotFound} />
            </Switch>
          </App>
        } />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Redirect form="/*" to="/admin/table/city" />
      </HashRouter>
    )
  }
}
export default Router;