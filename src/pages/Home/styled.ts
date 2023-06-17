import styled from 'styled-components';

import { MAX_WIDTH } from '../../constants';

export const ListContainer = styled.div`
  max-width: ${MAX_WIDTH}px;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-gap: 32px;
`;
