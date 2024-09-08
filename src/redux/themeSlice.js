import { createSlice } from "@reduxjs/toolkit";

const loadThemeFromLocalStorage = () => {
  try {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? JSON.parse(savedTheme) : "light";
  } catch (e) {
    console.warn("Could not load theme from localStorage", e);
    return "light";
  }
};

const saveThemeToLocalStorage = (theme) => {
  try {
    const savedTheme = JSON.stringify(theme);
    localStorage.setItem('theme', savedTheme);
  } catch (e) {
    console.warn("Could not save theme to localStorage", e);
  }
};

const initialState = {
  current: loadThemeFromLocalStorage(),
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme: (state, action) => {
      state.current = action.payload;
      saveThemeToLocalStorage(state.current);
    }
  }
});

export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;