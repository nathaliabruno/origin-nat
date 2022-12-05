import { ReactElement } from 'react';
import styled from 'styled-components';
import MaskedInput from 'react-text-mask';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';
import InputLabel from '../InputLabel';
import { getNumber } from '../../utils';

import { useSelector, useDispatch } from 'react-redux';

import {
  setByAmount,
  selectAmount,
  setMasked,
} from '../../redux/slices/amountSlice';

import moneySvg from '../../assets/icons/money.svg';

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

const InputAmountComponent = styled.div`
  position: relative;
  flex-basis: 59%;
  width: 100%;
  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

const InputField = styled(MaskedInput)`
  display: inline-block;
  width: calc(100% - 3.7rem);
  border: none;
  outline: none;
  font-family: 'Rubik';
  font-size: 1.2rem;
  line-height: 1.9rem;
  color: #4d6475;

  &:focus {
    --border-color: #1b31a8;
  }
`;

const InputFieldWrapper = styled.label`
  border: 1px solid var(--border-color);
  border-radius: 0.25rem;
  position: relative;
  padding: 0.9rem 0.9rem 0.9rem 0.9rem;
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  @media (max-width: 768px) {
    width: 100%;
  }

  &:before {
    content: url('${moneySvg}');
    width: 1.9rem;
  }
`;

const InputAmount = (props: InputProps): ReactElement => {
  const { label } = props;
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
      <InputFieldWrapper htmlFor="amount">
        <InputField
          mask={currencyMask}
          inputMode="numeric"
          id="amount"
          name="amount"
          value={amount || 0}
          onChange={(e) => handleChange(e.target.value)}
        />
      </InputFieldWrapper>
    </InputAmountComponent>
  );
};

export default InputAmount;
