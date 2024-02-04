import { createSlice } from "@reduxjs/toolkit";

const orderSummarySlice = createSlice({
  name: "orderSummary",
  initialState: {
    orderItems: [],
    subtotal: 0,
    shippingCharge: 15.0,
    taxCharge: 25.0,
  },
  reducers: {
    calculateOrderSummary: (state, action) => {
      const { cartItems } = action.payload;

      const subtotal = cartItems.reduce(
        (total, item) => total + item.quantity * item.price,
        0
      );

      state.orderItems = cartItems;
      state.subtotal = subtotal;
    },
  },
});

export const { calculateOrderSummary } = orderSummarySlice.actions;
export default orderSummarySlice.reducer;
