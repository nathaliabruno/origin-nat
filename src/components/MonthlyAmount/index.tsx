import { ReactElement, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectMonthsToReach } from '../../redux/slices/dateSlice';
import { selectAmount } from '../../redux/slices/amountSlice';
import { MonthlyInput, MonthlyWrapper, MonthlyLabel } from './styles';
import { createNumberMask } from 'text-mask-addons';

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
