import { ReactElement } from 'react';
import houseIcon from '../../assets/icons/buy-a-house.svg';
import { HeaderWrapper, Icon, Title, Subtitle } from './styles';

const BoxHeader = (): ReactElement => {
  return (
    <HeaderWrapper>
      <Icon src={houseIcon} alt="house image" />
      <div>
        <Title>Buy a house</Title>
        <Subtitle>Saving Goal</Subtitle>
      </div>
    </HeaderWrapper>
  );
};

export default BoxHeader;
