import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="?type=popular">Popular</Link>
        </li>
        <li>
          <Link to="?type=now-playing">Now Playing</Link>
        </li>
        <li>
          <Link to="?type=coming-soon">Coming Soon</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
