
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  email: '',
  message: '',
};

const formDataSlice = createSlice({
  name: 'formData',
  initialState,
  reducers: {
    setFormData: (state, action) => {
      return { ...state, ...action.payload };
    },
    resetFormData: () => initialState,
  },
});

export const { setFormData, resetFormData } = formDataSlice.actions;

export default formDataSlice.reducer;
