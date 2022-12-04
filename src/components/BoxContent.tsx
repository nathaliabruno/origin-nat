import styled from 'styled-components';
import Button from './Button';
import InputAmount from './InputAmount';
import ReachGoal from './ReachGoal';
import MonthlyAmount from './MonthlyAmount';
import { ReactElement } from 'react';
import DetailsText from './DetailsText';
import BoxHeader from './BoxHeader';

const BoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 560px;
  margin: 50px auto;
  align-items: center;
  padding: 2.5rem;
  background-color: white;
  box-shadow: 0px 16px 32px rgba(30, 42, 50, 0.08);
  border-radius: 8px;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const FormWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-bottom: 1rem;
  }
`;

const DetailsWrapper = styled.div`
  border: 1px solid #e9eef2;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`;

const BoxContent = (): ReactElement => {
  return (
    <BoxWrapper>
      <BoxHeader />
      <FormWrapper>
        <InputAmount label="Total amount" />
        <ReachGoal />
      </FormWrapper>
      <DetailsWrapper>
        <MonthlyAmount />
        <DetailsText />
      </DetailsWrapper>
      <div>
        <Button type="button" color="white" text="Confirm" bgColor="#1B31A8" />
      </div>
    </BoxWrapper>
  );
};

export default BoxContent;
