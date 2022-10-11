import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    isDarkMode: false,
  },
  reducers: {
    toggleTheme: (state) => {
      if (!state.isDarkMode == true) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("color-theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("color-theme", "light");
      }
      state.isDarkMode = !state.isDarkMode;
    },
    setDarkTheme: (state, payload) => {
      if (payload.payload == true) {
        localStorage.setItem("color-theme", "dark");
        document.documentElement.classList.add("dark");
      } else {
        localStorage.setItem("color-theme", "light");
        document.documentElement.classList.remove("dark");
      }
      state.isDarkMode = payload.payload;
    },
  },
});

export const { toggleTheme, setDarkTheme } = themeSlice.actions;

// export const isDarkMode = (state) => state.theme.isDarkMode;

export default themeSlice.reducer;
