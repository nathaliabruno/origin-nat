import { ReactElement } from 'react';
import InputLabel from './InputLabel';

import { getMonthYearDateText } from '../utils/dates';

import { useSelector, useDispatch } from 'react-redux';

import {
  incrementDate,
  decrementDate,
  selectDate,
} from '../redux/slices/dateSlice';

const ReachGoal = (): ReactElement => {
  const reachDate = useSelector(selectDate);

  const dispatch = useDispatch();

  return (
    <div>
      <InputLabel labelFor="reachDate">Reach goal by</InputLabel>
      <button onClick={() => dispatch(decrementDate())}>Previous</button>
      {getMonthYearDateText(reachDate).month}{' '}
      {getMonthYearDateText(reachDate).year}
      <button onClick={() => dispatch(incrementDate())}>Next</button>
    </div>
  );
};

export default ReachGoal;
