import styled from 'styled-components';
import BoxContent from './components/BoxContent';
const Root = styled.div`
  font-family: 'Work Sans';
`;

export function App(): JSX.Element {
  return (
    <Root data-testid="greetings-container">
      <BoxContent />
    </Root>
  );
}
