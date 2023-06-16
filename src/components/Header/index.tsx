import { Link } from 'react-router-dom';

import { MenuItem, MenuItems, Nav } from './styled';

function Header() {
  return (
    <Nav>
      <MenuItems>
        <MenuItem>
          <Link to="?type=popular">Popular</Link>
        </MenuItem>
        <MenuItem>
          <Link to="?type=now-playing">Now Playing</Link>
        </MenuItem>
        <MenuItem>
          <Link to="?type=coming-soon">Coming Soon</Link>
        </MenuItem>
      </MenuItems>
    </Nav>
  );
}

export default Header;
