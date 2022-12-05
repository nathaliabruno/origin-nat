import styled, { createGlobalStyle } from 'styled-components';
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

const GlobalStyle = createGlobalStyle`
  body {
    --border-color: #e9eef2
  }
  body, html, #root {
    margin: 0;
    padding: 0;
    border: none;
    position: absolute;
    top: 0;
  }

  * {
    box-sizing: border-box;
  }
`;

export function App(): JSX.Element {
  return (
    <Root>
      <GlobalStyle />
      <PageHeader />
      <Tagline />
      <BoxContent />
    </Root>
  );
}
