import { useInfiniteQuery } from '@tanstack/react-query';

import { getMovies } from '../api';
import { getQueryKey } from '../pages/Home/loader';
import useTypeFromQuery from './useTypeFromQuery';

function useMoviesData() {
  const type = useTypeFromQuery();
  const { data, fetchNextPage } = useInfiniteQuery(
    getQueryKey(type),
    async ({ pageParam = 1 }) => {
      const data = await getMovies(type, pageParam);
      return data;
    },
    {
      getNextPageParam: (lastPage) =>
        lastPage.page < lastPage.total_pages ? lastPage.page + 1 : undefined,
      getPreviousPageParam: undefined,
    }
  );

  return { data, fetchNextPage };
}

export default useMoviesData;
