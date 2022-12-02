import React from 'react';
import styled from 'styled-components';

const Root = styled.div`
  font-family: 'Work Sans';
`;

export function App(): JSX.Element {
  return (
    <Root data-testid="greetings-container">Welcome to the Origin THA</Root>
  );
}
