import styled from 'styled-components';

export const BoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 560px;
  margin: auto;
  align-items: center;
  padding: 2.5rem;
  background-color: white;
  box-shadow: 0px 16px 32px rgba(30, 42, 50, 0.08);
  border-radius: 8px;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

export const FormWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-bottom: 1rem;
  }
`;

export const DetailsWrapper = styled.div`
  border: 1px solid #e9eef2;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`;
