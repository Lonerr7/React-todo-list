import { combineReducers, createStore, applyMiddleware } from "redux";
import todoReducer from "./todoReducer";
import thunkMiddleware from 'redux-thunk'

const reducers = combineReducers({
  todo: todoReducer,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;
export default store;