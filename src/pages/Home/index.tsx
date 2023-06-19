import { AnimatePresence } from 'framer-motion';
import { Outlet } from 'react-router-dom';

import MovieCard from '../../components/MovieCard';
import {
  useIntersectionObserver,
  useMoviesData,
  useTypeFromQuery,
} from '../../hooks';
import { ListContainer } from './styled';

function Home() {
  const type = useTypeFromQuery();
  const { data: moviesData, fetchNextPage } = useMoviesData();
  const { bottomItemRef } = useIntersectionObserver(fetchNextPage);

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
        {moviesData?.pages?.map((page) =>
          page.results.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))
        )}
      </ListContainer>
      <div ref={bottomItemRef} />
      <AnimatePresence>
        <Outlet />
      </AnimatePresence>
    </>
  );
}

export default Home;
