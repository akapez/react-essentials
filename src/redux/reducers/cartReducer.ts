import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CartItem {
  id: number;
  price: number;
  details?: {
    manufacturer: string;
    warranty: string;
  };
}

export interface CartState {
  items: CartItem[];
  totalPrice: number;
  rating?: number;
}

const initialState: CartState = {
  items: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<CartItem>) {
      state.items.push(action.payload);
      state.totalPrice += action.payload.price;
    },
    removeItem(state, action: PayloadAction<number>) {
      const existingItem = state.items.find((item) => item.id === action.payload);
      if (existingItem) {
        state.items = state.items.filter((item) => item.id !== action.payload);
        state.totalPrice -= existingItem.price;
      }
    },
    updateProductWarranty(state, action: PayloadAction<{ id: number; warranty: string }>) {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item && item.details) {
        item.details.warranty = action.payload.warranty;
      }
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
