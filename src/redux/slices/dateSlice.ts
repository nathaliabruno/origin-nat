import { createSlice } from '@reduxjs/toolkit';

import { getNextMonthDate, getPreviousMonthDate } from '../../utils/dates';
import dayjs, { Dayjs } from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

const today = dayjs();
export const dateSlice = createSlice({
  name: 'date',
  initialState: {
    value: today,
  },
  reducers: {
    incrementDate: (state) => {
      state.value = getNextMonthDate(state.value);
    },
    decrementDate: (state) => {
      state.value = getPreviousMonthDate(state.value);
    },
  },
});

export const selectDate = (state: { date: { value: Dayjs } }): Dayjs =>
  state.date.value;

export const selectMonthsToReach = (state: {
  date: { value: Dayjs };
}): number => {
  return today.diff(state.date.value, 'month') * -1;
};

export const { incrementDate, decrementDate } = dateSlice.actions;

export default dateSlice.reducer;
