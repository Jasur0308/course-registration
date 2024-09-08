import { createSlice } from "@reduxjs/toolkit";

const loadFromLocalStorage = () => {
  try {
    const savedState = localStorage.getItem('students');
    return savedState ? JSON.parse(savedState) : [];
  } catch (e) {
    console.warn("Could not load students from localStorage", e);
    return [];
  }
};

const saveToLocalStorage = (students) => {
  try {
    const savedState = JSON.stringify(students);
    localStorage.setItem('students', savedState);
  } catch (e) {
    console.warn("Could not save students to localStorage", e);
  }
};

const initialState = {
  students: loadFromLocalStorage()
};

const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    addStudent: (state, action) => {
      state.students.push(action.payload);
      saveToLocalStorage(state.students);
    }
  }
});

export const { addStudent } = studentSlice.actions;
export default studentSlice.reducer;