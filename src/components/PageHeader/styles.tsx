import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  margin-bottom: 1.5rem;
  background-color: white;
  padding: 1.5rem 3.5rem;
  position: absolute;
  top: 0;
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const Icon = styled.img`
  width: 6.25rem;
  height: auto;
  display: block;
  @media (max-width: 768px) {
    width: 5rem;
  }
`;
