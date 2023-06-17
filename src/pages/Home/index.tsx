import styled from 'styled-components';

import MovieCard from '../../components/MovieCard';
import { MAX_WIDTH } from '../../constants';
import { useMoviesData } from '../../hooks';

function Home() {
  const moviesData = useMoviesData();

  return (
    <ListContainer>
      {moviesData?.results.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ListContainer>
  );
}

export default Home;

const ListContainer = styled.div`
  max-width: ${MAX_WIDTH}px;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-gap: 32px;
`;
