import React from 'react';
import ReactDOM from 'react-dom';
// import store from './store';
import store from './redux/store/configStore';
import { Provider } from 'react-redux';
import Router from './router';
import 'antd/dist/antd.css';
import './index.css';
// const store = configStore()
// Provider用于包裹整个程序
ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById('root')
);
