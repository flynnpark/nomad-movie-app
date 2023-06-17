import { Outlet } from 'react-router-dom';

import MovieCard from '../../components/MovieCard';
import { useMoviesData } from '../../hooks';
import { ListContainer } from './styled';

function Home() {
  const moviesData = useMoviesData();

  return (
    <>
      <ListContainer>
        {moviesData?.results.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </ListContainer>
      <Outlet />
    </>
  );
}

export default Home;
