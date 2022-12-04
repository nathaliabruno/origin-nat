import { createSlice } from '@reduxjs/toolkit';

import { getNextMonthDate, getPreviousMonthDate } from '../../utils/dates';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

const today = dayjs().toISOString();
export const dateSlice = createSlice({
  name: 'date',
  initialState: {
    value: today,
  },
  reducers: {
    incrementDate: (state) => {
      state.value = getNextMonthDate(dayjs(state.value)).toISOString();
    },
    decrementDate: (state) => {
      state.value = getPreviousMonthDate(dayjs(state.value)).toISOString();
    },
  },
});

export const selectDate = (state: { date: { value: string } }): string =>
  state.date.value;

export const selectMonthsToReach = (state: {
  date: { value: string };
}): number => {
  return dayjs(today).diff(state.date.value, 'month') * -1;
};

export const { incrementDate, decrementDate } = dateSlice.actions;

export default dateSlice.reducer;
