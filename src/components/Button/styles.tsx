import styled from 'styled-components';

interface ButtonStyled {
  bgColor: string;
  color: string;
}

export const ButtonComponent = styled('button')<ButtonStyled>`
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.color};
  font-family: 'Work Sans';
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.25rem;
  text-align: center;
  border: none;
  width: 20rem;
  height: 3.5rem;
  border-radius: 2rem;
  transition: all 0.3s ease;

  &:hover {
    cursor: pointer;
    filter: brightness(115%);
  }
`;
