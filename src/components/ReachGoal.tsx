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
    getMonthYearDateText(dayjs()).month ===
      getMonthYearDateText(reachDate).month &&
    getMonthYearDateText(dayjs()).year === getMonthYearDateText(reachDate).year;

  return (
    <div>
      <InputLabel labelFor="reachDate">Reach goal by</InputLabel>
      <button
        onClick={() => dispatch(decrementDate())}
        disabled={isCurrentMonth}
      >
        Previous
      </button>
      {getMonthYearDateText(reachDate).month}{' '}
      {getMonthYearDateText(reachDate).year}
      <button onClick={() => dispatch(incrementDate())}>Next</button>
    </div>
  );
};

export default ReachGoal;
