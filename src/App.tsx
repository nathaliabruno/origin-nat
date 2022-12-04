import styled from 'styled-components';
import BoxContent from './components/BoxContent';
import PageHeader from './components/PageHeader';
import Tagline from './components/Tagline';
const Root = styled.div`
  font-family: 'Work Sans';
  background-color: #e5e5e5;
  min-height: 100vh;
  width: 100vw;
  padding: 0;
  margin: 0;
  position: absolute;
  top: 0;
  padding-top: 5rem;
  @media (max-width: 768px) {
    padding-top: 4rem;
  }
`;

export function App(): JSX.Element {
  return (
    <Root data-testid="greetings-container">
      <PageHeader />
      <Tagline />
      <BoxContent />
    </Root>
  );
}
