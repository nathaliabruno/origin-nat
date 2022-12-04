import { ReactElement, useEffect, useState } from 'react';

import { useSelector } from 'react-redux';

import { selectMonthsToReach } from '../redux/slices/dateSlice';
import { selectAmount } from '../redux/slices/amountSlice';

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
  flex-basis: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  text-align: center;
  padding: 1.5rem 2rem;
  @media (max-width: 768px) {
    font-size: 1.5rem;
    line-height: 120%;
  }
`;

const MonthlyWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const MonthlyLabel = styled.h4`
  flex-basis: 50%;
  font-size: 1.25rem;
  line-height: 1.5rem;
  font-weight: 400;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    line-height: 120%;
  }
`;
const MonthlyAmount = (): ReactElement => {
  const monthsToReach = useSelector(selectMonthsToReach);
  const amount = useSelector(selectAmount);

  const [monthlyAmount, setMonthlyAmount] = useState(0);

  const currencyMask = createNumberMask({
    ...maskOptions,
  });

  useEffect(() => {
    setMonthlyAmount(() => amount / monthsToReach);
  }, [monthsToReach, amount]);

  return (
    <MonthlyWrapper>
      <MonthlyLabel>Monthly Amount</MonthlyLabel>
      <MonthlyInput
        mask={currencyMask}
        inputMode="numeric"
        id="monthlyAmount"
        name="monthlyAmount"
        value={monthlyAmount || 0}
        readOnly
        disabled
      />
    </MonthlyWrapper>
  );
};

export default MonthlyAmount;
