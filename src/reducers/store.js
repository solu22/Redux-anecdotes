
import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import anecdoteReducer from './anecdoteReducer';
import notificationReducer from './notificationReducer';

const reducers = combineReducers({
    anecdoteReducer, notificationReducer
})

const store = createStore(reducers, composeWithDevTools())

export default store