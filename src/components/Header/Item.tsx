import { Link } from 'react-router-dom';

import { MovieListType } from '../../constants';
import { Dot, MenuItem } from './styled';

interface Props {
  layoutId: string;
  listType: MovieListType;
  selected: boolean;
}

function Item({ layoutId, listType, selected }: Props) {
  return (
    <MenuItem>
      <Link to={`?type=${listType}`}>
        {listType.replace('-', ' ').toUpperCase()}
        {selected && <Dot layoutId={layoutId} />}
      </Link>
    </MenuItem>
  );
}

export default Item;
