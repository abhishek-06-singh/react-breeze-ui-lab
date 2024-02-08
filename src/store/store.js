import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import cartReducer from "./cartSlice";
import addressReducer from "./addressSlice";
import orderSummaryReducer from "./orderSummarySlice";
import googleAuthReducer from "./googleAuthSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    address: addressReducer,
    orderSummary: orderSummaryReducer,
    googleAuth: googleAuthReducer,
  },
});
export default store;
