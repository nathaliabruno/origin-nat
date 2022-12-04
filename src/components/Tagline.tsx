/* eslint-disable react/no-unescaped-entities */
import styled from 'styled-components';
import { ReactElement } from 'react';

const TaglineText = styled.h3`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 120%;
  text-algin: center;
  padding: 1rem;
  color: #1b31a8;
`;

const Tagline = (): ReactElement => {
  return (
    <TaglineText>
      <span>
        Let's plan your <strong>saving goal</strong>.
      </span>
    </TaglineText>
  );
};

export default Tagline;