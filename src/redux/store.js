import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from './counterSlice';
import themeReducer from './themeSlice';
import studentReducer from './studentSlice';

const store = configureStore({
    reducer: {
        // counter: counterReducer,
        theme: themeReducer,
        student: studentReducer
    }
})

export { store }