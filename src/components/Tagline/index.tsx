/* eslint-disable react/no-unescaped-entities */
import { ReactElement } from 'react';
import { TaglineText } from './styles';

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
