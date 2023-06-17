import { MovieListType } from '../../constants';
import useTypeFromQuery from '../../hooks/useTypeFromQuery';
import Item from './Item';
import { MenuItems, Nav, NavContainer } from './styled';

function Header() {
  const type = useTypeFromQuery();

  return (
    <Nav>
      <NavContainer>
        <MenuItems>
          {[
            MovieListType.POPULAR,
            MovieListType.NOW_PLAYING,
            MovieListType.COMING_SOONG,
          ].map((listType) => (
            <Item
              key={listType}
              layoutId="select-header-menu"
              listType={listType}
              selected={type === listType}
            />
          ))}
        </MenuItems>
      </NavContainer>
    </Nav>
  );
}

export default Header;
