import { ReactElement } from 'react';
import { HeaderWrapper, Icon } from './styles';
import logo from '../../assets/logo.svg';

const PageHeader = (): ReactElement => {
  return (
    <HeaderWrapper>
      <Icon src={logo} alt="Origin logo" />
    </HeaderWrapper>
  );
};

export default PageHeader;
