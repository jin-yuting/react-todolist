import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import { Provider } from 'react-redux';
import App from './App';
import 'antd/dist/antd.css';
import './index.css';
// Provider用于包裹整个程序
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
