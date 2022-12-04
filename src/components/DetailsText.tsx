import styled from 'styled-components';
import { ReactElement } from 'react';

import { selectMonthsToReach, selectDate } from '../redux/slices/dateSlice';
import { selectMaskedAmount } from '../redux/slices/amountSlice';

import { getMonthYearDateText } from '../utils/dates';
import { useSelector } from 'react-redux';

const DetailsWrapper = styled.p`
  background-color: #f4f8fa;
  padding: 1.5rem 2rem;
  margin: 0;
`;

const DetailsText = (): ReactElement => {
  const monthsToReach = useSelector(selectMonthsToReach);
  const maskedAmount = useSelector(selectMaskedAmount);
  const reachDate = useSelector(selectDate);
  const { month, year } = getMonthYearDateText(reachDate);

  return (
    <DetailsWrapper>
      You are planning <strong>{monthsToReach} monthly deposits</strong> to
      reach your <strong>${maskedAmount}</strong> goal by{' '}
      <strong>
        {month} {year}
      </strong>
    </DetailsWrapper>
  );
};

export default DetailsText;
