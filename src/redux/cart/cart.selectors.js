import { createSelector } from 'reselect';

//input selelctor
const selectCart = state =>  state.cart;

//output 

export const selectCartItems = createSelector(
  [ selectCart],
  (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (accQty, cartItem) => accQty + cartItem.quantity, 
    0 
  )
)

