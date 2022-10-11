import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import themeReducer from "../features/theme/themeSlice";

export default configureStore({
  reducer: {
    theme: themeReducer,
    auth: authReducer,
  },
});
