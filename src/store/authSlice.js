// authSlice.js
import { createSlice } from "@reduxjs/toolkit";

const loadInitialState = () => {
  const storedEmail = localStorage.getItem("email") || "";
  const storedPassword = localStorage.getItem("password") || "";

  return {
    email: storedEmail,
    password: storedPassword,
  };
};

const authSlice = createSlice({
  name: "auth",
  initialState: loadInitialState(),
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
      localStorage.setItem("email", action.payload); // Save to localStorage
    },
    setPassword: (state, action) => {
      state.password = action.payload;
      localStorage.setItem("password", action.payload); // Save to localStorage
    },
  },
});

export const { setEmail, setPassword } = authSlice.actions;
export const selectEmail = (state) => state.auth.email;
export const selectPassword = (state) => state.auth.password;

export default authSlice.reducer;
