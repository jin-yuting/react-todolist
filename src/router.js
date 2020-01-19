import React, { Component } from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import App from './App';
import Admin from './Admin';
import Common from './Common';
import Home from './pages/Home';
import Login from './pages/login/login';
import Register from './pages/login/register';
import Buttons from './pages/ui/buttons';
import Modals from './pages/ui/modals';
import BasicTable from './pages/table/basicTable';
import CityTable from './pages/table/cityTable';
import OrderTable from './pages/table/order/orderTable';
import Draft from './pages/draft/index';
import Permission from './pages/permission/index';
import Detail from './pages/table/order/detail';
import Bar from './pages/echarts/bar/index';
import Pie from './pages/echarts/pie/index';
import Line from './pages/echarts/line/index';
import NotFound from './pages/NotFound';

class Router extends Component {
  render() {
    return (
      <HashRouter>
        <App>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/common" render={() =>
              <Common>
                <Route path="/common/order/detail/:userId" component={Detail} />
              </Common>
            } />
            <Route path="/" render={() =>
              <Admin>
                <Switch>
                  <Route path="/home" component={Home} />
                  <Route path="/ui/buttons" component={Buttons} />
                  <Route path="/ui/modals" component={Modals} />
                  <Route path="/table/basic" component={BasicTable} />
                  <Route path="/table/city" component={CityTable} />
                  <Route path="/table/order" component={OrderTable} />
                  <Route path="/draft" component={Draft} />
                  <Route path="/persimission" component={Permission} />
                  <Route path="/echarts/bar" component={Bar} />
                  <Route path="/echarts/pie" component={Pie} />
                  <Route path="/echarts/line" component={Line} />
                  <Route path="/404" component={NotFound} />
                  <Redirect to="/home" />
                </Switch>
              </Admin>
            } />
          </Switch>
        </App>
      </HashRouter>
    )
  }
}
export default Router;