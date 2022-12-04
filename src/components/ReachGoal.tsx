import { ReactElement } from 'react';
import InputLabel from './InputLabel';

import { getMonthYearDateText } from '../utils/dates';

import { useSelector, useDispatch } from 'react-redux';

import {
  incrementDate,
  decrementDate,
  selectDate,
} from '../redux/slices/dateSlice';
import dayjs from 'dayjs';

const ReachGoal = (): ReactElement => {
  const reachDate = useSelector(selectDate);

  const dispatch = useDispatch();

  const isCurrentMonth =
    getMonthYearDateText(dayjs().toISOString()).month ===
      getMonthYearDateText(reachDate).month &&
    getMonthYearDateText(dayjs().toISOString()).year ===
      getMonthYearDateText(reachDate).year;

  const { month, year } = getMonthYearDateText(reachDate);
  return (
    <div>
      <InputLabel labelFor="reachDate">Reach goal by</InputLabel>
      <button
        onClick={() => dispatch(decrementDate())}
        disabled={isCurrentMonth}
      >
        Previous
      </button>
      {month} {year}
      <button onClick={() => dispatch(incrementDate())}>Next</button>
    </div>
  );
};

export default ReachGoal;
