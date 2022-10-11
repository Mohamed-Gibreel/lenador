import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    accessToken: null,
  },
  reducers: {
    setAccessToken: (state, payload) => {
      state.accessToken = payload.payload;
    },
  },
});

export const isUserLoggedIn = (state) => state.auth.accessToken != null;

export const { setAccessToken } = authSlice.actions;

export default authSlice.reducer;
