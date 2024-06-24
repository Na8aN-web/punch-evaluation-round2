
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  formStage: 'hidden',
};

const formVisibilitySlice = createSlice({
  name: 'formVisibility',
  initialState,
  reducers: {
    setFormStage: (state, action) => {
      state.formStage = action.payload;
    },
    resetFormStage: (state) => {
      state.formStage = 'hidden';
    },
  },
});

export const { setFormStage, resetFormStage } = formVisibilitySlice.actions;

export default formVisibilitySlice.reducer;
