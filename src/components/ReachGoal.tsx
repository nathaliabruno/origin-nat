import { ReactElement, useState } from 'react';
import InputLabel from './InputLabel';

import {
  getMonthYearDateText,
  getNextMonthDate,
  getPreviousMonthDate,
} from '../utils/dates';
import dayjs, { Dayjs } from 'dayjs';

const ReachGoal = (): ReactElement => {
  const [reachDate, setReachDate] = useState(dayjs());

  const handleNextMonth = (reachDate: Dayjs) => {
    const nextMonth = getNextMonthDate(reachDate);
    setReachDate(nextMonth);
  };

  const handlePreviousMonth = (reachDate: Dayjs) => {
    const nextMonth = getPreviousMonthDate(reachDate);
    setReachDate(nextMonth);
  };

  return (
    <div>
      <InputLabel labelFor="reachDate">Reach goal by</InputLabel>
      <button onClick={() => handlePreviousMonth(reachDate)}>Previous</button>
      {getMonthYearDateText(reachDate).month}{' '}
      {getMonthYearDateText(reachDate).year}
      <button onClick={() => handleNextMonth(reachDate)}>Next</button>
    </div>
  );
};

export default ReachGoal;
