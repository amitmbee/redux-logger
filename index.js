export const logger = store => next => action => {
  console.log("Previous State", store.getState());
  console.log("Dispatching Action", action);
  let result = next(action);
  console.log("Next State", store.getState());
  return result;
};

/*
How to use
This is just for learning purpose only.

import {logger} from 'redux-logger'
import {createStore, applyMiddleware} from 'redux'
import reducer from 'path/to/reducer'

const reduxStore = createStore(reducer, applyMiddleware(logger))

*/
