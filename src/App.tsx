import React from 'react';
import styled from 'styled-components';
import Button from './components/Button';
import InputAmount from './components/InputAmount';
import ReachGoal from './components/ReachGoal';

const Root = styled.div`
  font-family: 'Work Sans';
`;

export function App(): JSX.Element {
  return (
    <Root data-testid="greetings-container">
      Welcome to the Origin THA
      <div>
        <Button type="button" color="white" text="Confirm" bgColor="#1B31A8" />
      </div>
      <div>
        <InputAmount label="Total amount" />
      </div>
      <div>
        <ReachGoal />
      </div>
    </Root>
  );
}
