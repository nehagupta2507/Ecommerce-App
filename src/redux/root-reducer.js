//Represents all the states of the application. All reducer and gonna go here.

import { combineReducers } from 'redux';
import  userReducer from './user/user.reducer';

export default combineReducers({
  user: userReducer
});