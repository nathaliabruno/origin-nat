import { ReactElement } from 'react';
import { InputLabel } from './styles';
interface LabelProps {
  labelFor: string;
  children?: string;
}

const inputLabel = (props: LabelProps): ReactElement => {
  return <InputLabel htmlFor={props.labelFor}>{props.children}</InputLabel>;
};

export default inputLabel;
