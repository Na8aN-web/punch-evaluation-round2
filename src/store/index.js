
import { configureStore } from '@reduxjs/toolkit';
import formVisibilityReducer from './formSlice/formVisibilitySlice';
import formDataReducer from './formSlice/formDataSlice';

const store = configureStore({
  reducer: {
    formVisibility: formVisibilityReducer,
    formData: formDataReducer,
  },
});

export default store;
