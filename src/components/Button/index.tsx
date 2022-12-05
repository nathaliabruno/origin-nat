import { ReactElement } from 'react';
import { ButtonComponent } from './styles';
interface ButtonProps {
  text: string;
  type: 'button' | 'submit' | 'reset';
  bgColor: string;
  color: string;
}

const Button = (props: ButtonProps): ReactElement => {
  const { text, type, bgColor, color } = props;

  return (
    <ButtonComponent bgColor={bgColor} color={color} type={type}>
      {text}
    </ButtonComponent>
  );
};

export default Button;
