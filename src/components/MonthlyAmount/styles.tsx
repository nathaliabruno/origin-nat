import MaskedInput from 'react-text-mask';
import styled from 'styled-components';

export const MonthlyInput = styled(MaskedInput)`
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
    font-size: 1.25rem;
    line-height: 120%;
    opacity: 1;
    padding: 1.5rem 0.5rem;
  }
`;

export const MonthlyWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const MonthlyLabel = styled.h4`
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
    font-size: 1rem;
    line-height: 120%;
  }
`;
