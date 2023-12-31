import type { QueryClient, QueryKey } from '@tanstack/react-query';
import type { LoaderFunctionArgs } from 'react-router-dom';

import { getMovies } from '../../api';
import { MovieListType } from '../../constants';

export const getQueryKey = (type: MovieListType): QueryKey => [
  'movies',
  { type },
];

export const loader =
  (queryClient: QueryClient) =>
  async ({ request }: LoaderFunctionArgs) => {
    const url = new URL(request.url);
    const type = (url.searchParams.get('type') ||
      MovieListType.POPULAR) as MovieListType;
    const queryKey = getQueryKey(type);

    return (
      queryClient.getQueryData<GetMoviesResponse>(queryKey) ??
      (await queryClient.fetchInfiniteQuery({
        queryFn: async () => getMovies(type, 1),
        queryKey,
      }))
    );
  };
