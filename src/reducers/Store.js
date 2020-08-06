import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

import { movieListReducer } from './MovieReducer.js';

const reducer = combineReducers({
  movieList: movieListReducer,
});
const loggerMiddleware = createLogger({
  predicate: () => process.env.NODE_ENV === 'development',
});
const middlewares = [loggerMiddleware, thunk];
//const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const composedEnhancers = composeWithDevTools(applyMiddleware(...middlewares));
const store = createStore(
  reducer,
  // initialState,
  composedEnhancers
);
export default store;
