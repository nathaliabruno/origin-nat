import { createSlice } from '@reduxjs/toolkit';

export const amountSlice = createSlice({
  name: 'amount',
  initialState: {
    value: 0,
    masked: '0',
  },
  reducers: {
    setByAmount: (state, action) => {
      state.value = action.payload;
    },
    setMasked: (state, action) => {
      state.masked = action.payload;
    },
  },
});

export const selectAmount = (state: { amount: { value: number } }): number =>
  state.amount.value;

export const selectMaskedAmount = (state: {
  amount: { masked: string };
}): string => state.amount.masked;

export const { setByAmount, setMasked } = amountSlice.actions;

export default amountSlice.reducer;
