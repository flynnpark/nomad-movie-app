import { Link } from 'react-router-dom';

import { useMoviesData } from '../../hooks';

function Home() {
  const moviesData = useMoviesData();

  return (
    <>
      {moviesData?.results.map((movie) => (
        <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
      ))}
    </>
  );
}

export default Home;
