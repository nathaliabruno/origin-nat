import styled from 'styled-components';

export const ReachDateComponent = styled.div`
  position: relative;
  width: 100%;
  flex-basis: 39%;
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  padding: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const ReachDateWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #e9eef2;
  border-radius: 0.25rem;
  padding: 0.5rem;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #1b31a8;
    outline: none;
  }
`;

export const DateWrapper = styled.h4`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  line-height: 1.5rem;
  color: #1e2a32;
  width: 50%;
  margin: 0;
`;

export const MonthText = styled.span`
  font-weight: 600;
`;

export const YearText = styled.span`
  font-weight: 400;
  color: #8a9ca9;
`;
