import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MenuItems = styled.ul`
  display: flex;
`;

export const MenuItem = styled.li`
  :not([hidden]) ~ :not([hidden]) {
    margin-left: 20px;
  }
`;
