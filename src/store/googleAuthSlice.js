// googleAuthSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: null,
  name: null,
  imageUrl: null,
};

const googleAuthSlice = createSlice({
  name: "googleAuth",
  initialState,
  reducers: {
    setGoogleAuthData: (state, action) => {
      const { email, name, imageUrl } = action.payload;
      state.email = email;
      state.name = name;
      state.imageUrl = imageUrl;
    },
    clearGoogleAuthData: (state) => {
      state.email = null;
      state.name = null;
      state.imageUrl = null;
    },
  },
});

export const { setGoogleAuthData, clearGoogleAuthData } =
  googleAuthSlice.actions;

export const selectGoogleAuth = (state) => state.googleAuth;
export const selectGoogleEmail = (state) => state.googleAuth.email;
export const selectGoogleName = (state) => state.googleAuth.name;
export const selectGoogleImageUrl = (state) => state.googleAuth.imageUrl;

export default googleAuthSlice.reducer;
