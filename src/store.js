import { createStore,combineReducers } from 'redux';
import { CHANGE_NAME, ADD_AGE } from './actions';

function reducer1(state={name:'隔壁王校长'},action){
    switch(action.type){
        case CHANGE_NAME:
            return {
                ...state,
                name: action.value
            };
        default:
            return state;
    }
}
function reducer2(state={age: 25},action){
    switch(action.type){
        case ADD_AGE:
            return {
                ...state,
                age: state.age + action.value
            }
        default:
            return state;
    }
}
let store = createStore(combineReducers({reducer1, reducer2}));

export default store;