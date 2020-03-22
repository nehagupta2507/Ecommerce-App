//Represents all the states of the application. All reducer are gonna go here.

import { combineReducers } from 'redux';
import  userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';

export default combineReducers({
  user: userReducer,
  cart: cartReducer
});