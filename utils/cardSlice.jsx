import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
  name: 'cart',
  initialState: {
    items: []
  },
  reducers: {
    addItem: (state, action) => {
      const itemPayload = action.payload;

      // Ensure the payload has the expected structure
      if (itemPayload?.card?.info?.id) {
        const existingItem = state.items.find(
          (item) => item.card.info.id === itemPayload.card.info.id
        );

        if (existingItem) {
          // Increase quantity if item already exists
          existingItem.quantity += 1;
        } else {
          // Add new item with initial quantity
          state.items.push({ ...itemPayload, quantity: 1 });
        }
      }
    },
    removeItemById: (state, action) => {
      const itemId = action.payload;

      // Find item by id
      const existingItem = state.items.find(
        (item) => item.card.info.id === itemId
      );

      if (existingItem && existingItem.quantity > 1) {
        // Decrease quantity if more than one
        existingItem.quantity -= 1;
      } else {
        // Remove item if quantity is 1 or item doesn't exist
        state.items = state.items.filter(
          (item) => item.card.info.id !== itemId
        );
      }
    },
    clearCart: (state) => {
      // Empty the cart
      state.items = [];
    }
  }
});

export const { addItem, removeItemById, clearCart } = cardSlice.actions;
export default cardSlice.reducer;
