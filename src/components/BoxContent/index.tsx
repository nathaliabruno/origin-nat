import { ReactElement } from 'react';

import Button from '../Button';
import InputAmount from '../InputAmount';
import ReachGoal from '../ReachGoal';
import MonthlyAmount from '../MonthlyAmount';
import DetailsText from '../DetailsText';
import BoxHeader from '../BoxHeader';
import { BoxWrapper, FormWrapper, DetailsWrapper } from './styles';

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
