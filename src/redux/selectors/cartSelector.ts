import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { CartItem } from "../reducers/cartReducer";

// Basic selector to get the cart items from the state
export const selectCartItems = (state: RootState) => state.cart.items;

// Basic selector to get the total price of the cart
export const selectCartTotalPrice = (state: RootState) => state.cart.totalPrice;

export const selectTotalItems = (state: RootState) => state.cart.items.length;
