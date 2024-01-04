// store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './reducer';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    // Add other reducers as needed
  },
});

export default store;
// store.js
