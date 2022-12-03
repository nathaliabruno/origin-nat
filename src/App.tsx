import React from 'react';
import styled from 'styled-components';
import Button from './components/Button';

const Root = styled.div`
  font-family: 'Work Sans';
`;

export function App(): JSX.Element {
  return (
    <Root data-testid="greetings-container">
      Welcome to the Origin THA
      <Button type="button" color="white" text="Confirm" bgColor="#1B31A8" />
    </Root>
  );
}
