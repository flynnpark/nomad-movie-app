import { motion } from 'framer-motion';
import styled from 'styled-components';

import { MAX_WIDTH } from '../../constants';

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px 0;
`;

export const NavContainer = styled.div`
  display: flex;
  max-width: ${MAX_WIDTH}px;
  margin: auto;
`;

export const MenuItems = styled.ul`
  display: flex;
  font-size: 20px;
`;

export const MenuItem = styled.li`
  position: relative;
  font-weight: 500;
  :not([hidden]) ~ :not([hidden]) {
    margin-left: 20px;
  }
`;

export const Dot = styled(motion.span)`
  position: absolute;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #ff3f34;
  left: 0;
  right: 0;
  bottom: -12px;
  margin: 0 auto;
`;
