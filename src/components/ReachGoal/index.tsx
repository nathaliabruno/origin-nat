import { ReactElement } from 'react';
import InputLabel from './../InputLabel';

import { getMonthYearDateText } from '../../utils/dates';

import { useSelector, useDispatch } from 'react-redux';

import arrowLeft from '../../assets/icons/arrow-left.svg';
import arrowRight from '../../assets/icons/arrow-right.svg';

import {
  ReachDateComponent,
  Button,
  ReachDateWrapper,
  DateWrapper,
  MonthText,
  YearText,
} from './styles';

import {
  incrementDate,
  decrementDate,
  selectDate,
} from '../../redux/slices/dateSlice';
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
    <ReachDateComponent>
      <InputLabel labelFor="reachDate">Reach goal by</InputLabel>
      <ReachDateWrapper>
        <Button
          type="button"
          onClick={() => dispatch(decrementDate())}
          disabled={isCurrentMonth}
        >
          <img alt="previous" src={arrowLeft} />
        </Button>
        <DateWrapper>
          <MonthText>{month}</MonthText>
          <YearText>{year}</YearText>
        </DateWrapper>
        <Button type="button" onClick={() => dispatch(incrementDate())}>
          <img alt="next" src={arrowRight} />
        </Button>
      </ReachDateWrapper>
    </ReachDateComponent>
  );
};

export default ReachGoal;
