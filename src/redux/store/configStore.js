/**
 * 创建数据源
 */
import { createStore } from 'redux'
import reducer from '../reducer/index'
import { composeWithDevTools } from 'redux-devtools-extension'
// export default () =>createStore(reducer,composeWithDevTools())

let store = createStore(reducer);
export default store;