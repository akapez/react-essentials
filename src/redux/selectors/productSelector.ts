import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Product } from "../reducers/productReducer";

// Basic selector to get the products from the state
export const selectAllProducts = (state: RootState) => state.product.products;

// Basic selector to get the status from the product API
export const selectProductListStatus = (state: RootState) => state.product.status;

//Memoized selector to get the expensive products
export const selectExpensiveProducts = createSelector([selectAllProducts], (products: Product[]) =>
  products.filter((product) => product.price > 500)
);
