import { ReactElement } from 'react';
import styled from 'styled-components';
import MaskedInput from 'react-text-mask';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';

import { getNumber } from '../utils';

import moneySvg from '../assets/icons/money.svg';

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
  const currencyMask = createNumberMask({
    ...maskOptions,
  });

  const InputAmount = styled.div`
    position: relative;
  `;
  const InputLabel = styled.label`
    font-family: 'Work Sans';
    display: block;
    font-size: 0.8rem;
    line-height: 1.1rem;
    color: #1e2a32;
    margin-bottom: 0.4rem;
  `;

  const InputFieldWrapper = styled.label`
    border: 1px solid #e9eef2;
    border-radius: 4px;
    position: relative;
    padding: 0.9rem 0.9rem 0.9rem 0.9rem;
    display: inline-flex;
    align-items: center;
    justify-content: flex-start;

    &:before {
      content: url('${moneySvg}');
      width: 1.9rem;
    }
  `;

  const InputField = styled(MaskedInput)`
    display: inline-block;
    width: calc(100% - 3.7rem);
    border: none;
    outline: none;
    width: 100%;
    font-family: 'Rubik';
    font-size: 1.2rem;
    line-height: 1.9rem;
    color: #4d6475;
  `;

  const handleChange = (value: string) => {
    console.log(getNumber(value));
  };

  return (
    <InputAmount className="Amount">
      <InputLabel htmlFor="amount">{label}</InputLabel>
      <InputFieldWrapper htmlFor="amount">
        <InputField
          mask={currencyMask}
          inputMode="numeric"
          id="amount"
          name="amount"
          onChange={(e) => handleChange(e.target.value)}
        />
      </InputFieldWrapper>
    </InputAmount>
  );
};

export default InputAmount;
