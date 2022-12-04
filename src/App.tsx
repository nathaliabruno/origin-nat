import styled from 'styled-components';
import BoxContent from './components/BoxContent';
const Root = styled.div`
  font-family: 'Work Sans';
  background-color: #e5e5e5;
  height: 100vh;
  width: 100vw;
  padding: 0;
  margin: 0;
  position: absolute;
  top: 0;
`;

export function App(): JSX.Element {
  return (
    <Root data-testid="greetings-container">
      <BoxContent />
    </Root>
  );
}
