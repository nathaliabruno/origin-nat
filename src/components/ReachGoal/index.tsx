import { ReactElement, useCallback, useEffect, useState } from 'react';
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
  const [focus, setFocus] = useState(false);

  const dispatch = useDispatch();

  const isCurrentMonth =
    getMonthYearDateText(dayjs().toISOString()).month ===
      getMonthYearDateText(reachDate).month &&
    getMonthYearDateText(dayjs().toISOString()).year ===
      getMonthYearDateText(reachDate).year;

  const increment = useCallback(() => {
    dispatch(incrementDate());
  }, [dispatch]);

  const decrement = useCallback(() => {
    dispatch(decrementDate());
  }, [dispatch]);

  const handleKeyDown = useCallback(
    (e) => {
      if (e.keyCode === 37) {
        // Left arrow
        e.preventDefault();
        if (isCurrentMonth) return;
        decrement();
      } else if (e.keyCode === 39) {
        // right arrow
        e.preventDefault();
        increment();
      }
    },
    [increment, decrement, isCurrentMonth]
  );

  useEffect(() => {
    if (focus) {
      document.addEventListener('keydown', handleKeyDown, false);

      return () => {
        document.removeEventListener('keydown', handleKeyDown, false);
      };
    }
  }, [handleKeyDown, focus]);

  const { month, year } = getMonthYearDateText(reachDate);
  return (
    <ReachDateComponent>
      <InputLabel labelFor="reachDate">Reach goal by</InputLabel>
      <ReachDateWrapper
        tabIndex={2}
        borderColor={focus ? '#1b31a8' : '#e9eef2'}
        onBlur={() => setFocus(false)}
        onFocus={() => setFocus(true)}
        data-testid="date-wrapper"
      >
        <Button
          type="button"
          onClick={() => {
            decrement();
            setFocus(true);
          }}
          disabled={isCurrentMonth}
          data-testid="prev"
        >
          <img alt="previous" title="Previous" src={arrowLeft} />
        </Button>
        <DateWrapper>
          <MonthText data-testid="month">{month}</MonthText>
          <YearText>{year}</YearText>
        </DateWrapper>
        <Button
          type="button"
          onClick={() => {
            increment();
            setFocus(true);
          }}
          data-testid="next"
        >
          <img alt="next" title="Next" src={arrowRight} />
        </Button>
      </ReachDateWrapper>
    </ReachDateComponent>
  );
};

export default ReachGoal;
