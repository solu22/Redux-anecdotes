
import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import anecdoteReducer from './anecdoteReducer';
import notificationReducer from './notificationReducer';
import filterReducer from './filterReducer';

const reducers = combineReducers({
    anecdoteReducer, notificationReducer, filterReducer
})

const store = createStore(reducers, composeWithDevTools())

export default store