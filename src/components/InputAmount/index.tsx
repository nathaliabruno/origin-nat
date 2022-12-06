import { ReactElement, useState } from 'react';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';
import InputLabel from '../InputLabel';
import { getNumber } from '../../utils';
import { useSelector, useDispatch } from 'react-redux';
import { InputAmountComponent, InputFieldWrapper, InputField } from './styles';
import {
  setByAmount,
  selectAmount,
  setMasked,
} from '../../redux/slices/amountSlice';

interface InputProps {
  label: string;
}

const maskOptions = {
  prefix: '',
  sufix: '',
  includeThousandsSeparator: true,
  thousandsSeparatorSymbol: ',',
  allowDecimal: true,
  decumalSymbal: '.',
  decimalLimit: 2,
  allowNegative: false,
  allowLeadingZeros: false,
};

const InputAmount = (props: InputProps): ReactElement => {
  const { label } = props;
  const [focus, setFocus] = useState(false);
  const currencyMask = createNumberMask({
    ...maskOptions,
  });

  const amount = useSelector(selectAmount);
  const dispatch = useDispatch();

  const handleChange = (value: string) => {
    dispatch(setByAmount(getNumber(value)));
    dispatch(setMasked(`$${value}`));
  };

  return (
    <InputAmountComponent className="Amount">
      <InputLabel labelFor="amount">{label}</InputLabel>
      <InputFieldWrapper
        htmlFor="amount"
        borderColor={focus ? '#1b31a8' : '#e9eef2'}
      >
        <InputField
          mask={currencyMask}
          inputMode="numeric"
          id="amount"
          name="amount"
          value={amount || 0}
          onChange={(e) => handleChange(e.target.value)}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          tabIndex={1}
          autoFocus
        />
      </InputFieldWrapper>
    </InputAmountComponent>
  );
};

export default InputAmount;
