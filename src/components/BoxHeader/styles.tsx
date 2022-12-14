import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  margin-bottom: 1.5rem;
`;

export const Title = styled.h1`
  font-family: 'Rubik';
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 120%;
  color: #1e2a32;
  margin: 0 0 0.25rem 0;
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const Subtitle = styled.h2`
  font-weight: 400;
  font-size: 1rem;
  line-height: 150%;
  color: #708797;
  margin: 0;
  @media (max-width: 768px) {
    font-size: 0.75rem;
  }
`;

export const Icon = styled.img`
  width: 4rem;
  height: auto;
  display: block;
  margin-right: 1rem;
`;
