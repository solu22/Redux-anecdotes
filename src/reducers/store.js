
import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import anecdoteReducer from './anecdoteReducer';
import notificationReducer from './notificationReducer';
import filterReducer from './filterReducer';



const reducers = combineReducers({
    anecdoteReducer, notificationReducer, filterReducer
})


const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))


export default store