import { ReactElement } from 'react';
import InputLabel from './InputLabel';

import { getMonthYearDateText } from '../utils/dates';

import { useSelector, useDispatch } from 'react-redux';

import arrowLeft from '../assets/icons/arrow-left.svg';
import arrowRight from '../assets/icons/arrow-right.svg';

import {
  incrementDate,
  decrementDate,
  selectDate,
} from '../redux/slices/dateSlice';
import dayjs from 'dayjs';
import styled from 'styled-components';

const ReachDateComponent = styled.div`
  position: relative;
  width: 100%;
  flex-basis: 49%;
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  padding: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const ReachDateWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #e9eef2;
  padding: 0.5rem;
`;

const DateWrapper = styled.h4`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  line-height: 1.5rem;
  color: #1e2a32;
  width: 10rem;
  margin: 0;
`;

const MonthText = styled.span`
  font-weight: 600;
`;

const YearText = styled.span`
  font-weight: 400;
`;

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
