import { ReactElement } from 'react';
import styled from 'styled-components';

interface LabelProps {
  labelFor: string;
  children?: string;
}
const inputLabel = (props: LabelProps): ReactElement => {
  const InputLabel = styled.label`
    font-family: 'Work Sans';
    display: block;
    font-size: 0.8rem;
    line-height: 1.1rem;
    color: #1e2a32;
    margin-bottom: 0.4rem;
  `;

  return <InputLabel htmlFor={props.labelFor}>{props.children}</InputLabel>;
};

export default inputLabel;
