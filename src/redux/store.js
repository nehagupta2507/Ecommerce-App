//Middleware between action firing and reducer , move it along
import  { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from './root-reducer';


// const store = createStore(rootReducer, applyMiddleware(logger))
// Below makes our app more scalable as we might wanna modify this array with different middleware
const middlewares = [logger];
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;