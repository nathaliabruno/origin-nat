import { createSlice } from '@reduxjs/toolkit';

export const amountSlice = createSlice({
  name: 'amount',
  initialState: {
    value: 0,
  },
  reducers: {
    setByAmount: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const selectAmount = (state: { amount: { value: number } }): number =>
  state.amount.value;

export const { setByAmount } = amountSlice.actions;

export default amountSlice.reducer;
