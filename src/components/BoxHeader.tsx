import styled from 'styled-components';
import { ReactElement } from 'react';

import houseIcon from '../assets/icons/buy-a-house.svg';

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 560px;
  margin: 50px auto;
  align-items: center;
`;

const BoxHeader = (): ReactElement => {
  return <HeaderWrapper></HeaderWrapper>;
};

export default BoxHeader;
