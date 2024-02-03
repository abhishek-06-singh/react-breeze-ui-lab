import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  shippingAddress: {
    address: "",
    apartment: "",
    city: "",
    region: "",
    postalCode: "",
  },
  billingSameAsShipping: true,
};

const addressSlice = createSlice({
  name: "address",
  initialState,
  reducers: {
    updateShippingAddress: (state, action) => {
      state.shippingAddress = { ...state.shippingAddress, ...action.payload };
    },
    toggleBillingSameAsShipping: (state) => {
      state.billingSameAsShipping = !state.billingSameAsShipping;
    },
  },
});

export const { updateShippingAddress, toggleBillingSameAsShipping } =
  addressSlice.actions;
export default addressSlice.reducer;
