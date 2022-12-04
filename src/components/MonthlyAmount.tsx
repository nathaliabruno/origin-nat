import { ReactElement, useEffect, useState } from 'react';

import { useSelector } from 'react-redux';

import { selectMonthsToReach, selectDate } from '../redux/slices/dateSlice';
import { selectAmount, selectMaskedAmount } from '../redux/slices/amountSlice';

import { getMonthYearDateText } from '../utils/dates';

import MaskedInput from 'react-text-mask';
import { createNumberMask } from 'text-mask-addons';
import styled from 'styled-components';

const maskOptions = {
  prefix: '$',
  sufix: '',
  includeThousandsSeparator: true,
  thousandsSeparatorSymbol: ',',
  allowDecimal: true,
  decumalSymbal: '.',
  decimalLimit: 2,
  allowNegative: false,
  allowLeadingZeros: false,
};

const MonthlyInput = styled(MaskedInput)`
  border: none;
  outline: none;
  font-size: 2rem;
  line-heigh: 2.525rem;
  color: #0079ff;
  font-family: 'Rubik';
  background: white;
`;

const MonthlyAmount = (): ReactElement => {
  const monthsToReach = useSelector(selectMonthsToReach);
  const amount = useSelector(selectAmount);
  const maskedAmount = useSelector(selectMaskedAmount);
  const reachDate = useSelector(selectDate);
  const { month, year } = getMonthYearDateText(reachDate);

  const [monthlyAmount, setMonthlyAmount] = useState(0);

  const currencyMask = createNumberMask({
    ...maskOptions,
  });

  useEffect(() => {
    setMonthlyAmount(() => amount / monthsToReach);
  }, [monthsToReach, amount]);

  return (
    <div>
      <MonthlyInput
        mask={currencyMask}
        inputMode="numeric"
        id="monthlyAmount"
        name="monthlyAmount"
        value={monthlyAmount || 0}
        readOnly
        disabled
      />

      <p>
        You are planning <strong>{monthsToReach} monthly deposits</strong> to
        reach your <strong>${maskedAmount}</strong> goal by{' '}
        <strong>
          {month} {year}
        </strong>
      </p>
    </div>
  );
};

export default MonthlyAmount;
