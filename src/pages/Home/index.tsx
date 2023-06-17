import { AnimatePresence } from 'framer-motion';
import { Outlet } from 'react-router-dom';

import MovieCard from '../../components/MovieCard';
import { useMoviesData } from '../../hooks';
import useTypeFromQuery from '../../hooks/useTypeFromQuery';
import { ListContainer } from './styled';

function Home() {
  const type = useTypeFromQuery();
  const moviesData = useMoviesData();

  return (
    <>
      <ListContainer
        variants={{
          visible: {
            opacity: 1,
            scale: 1,
            transition: {
              delayChildren: 0.05,
              staggerChildren: 0.1,
            },
          },
        }}
        animate="visible"
        initial="hidden"
        key={type}
      >
        {moviesData?.results.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </ListContainer>
      <AnimatePresence>
        <Outlet />
      </AnimatePresence>
    </>
  );
}

export default Home;
