import styled from 'styled-components';
import MaskedInput from 'react-text-mask';

import moneySvg from '../../assets/icons/money.svg';

interface BorderStyled {
  borderColor: string;
}

export const InputAmountComponent = styled.div`
  position: relative;
  flex-basis: 59%;
  width: 100%;
  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

export const InputField = styled(MaskedInput)`
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

export const InputFieldWrapper = styled('label')<BorderStyled>`
  border: 1px solid ${(props) => props.borderColor};
  border-radius: 0.25rem;
  position: relative;
  padding: 0.9rem 0.9rem 0.9rem 0.9rem;
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  transition: border-color 0.3s ease;
  @media (max-width: 768px) {
    width: 100%;
  }

  &:before {
    content: url('${moneySvg}');
    width: 1.9rem;
  }
`;
