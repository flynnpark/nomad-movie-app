import type { QueryClient, QueryKey } from '@tanstack/react-query';
import type { LoaderFunctionArgs } from 'react-router-dom';

import { getMovieDetail } from '../../api';

export const getQueryKey = (movieId: string): QueryKey => ['movies', movieId];

export const loader =
  (queryClient: QueryClient) =>
  async ({ params: { movieId } }: LoaderFunctionArgs) => {
    if (!movieId) {
      throw new Response('', {
        status: 404,
        statusText: 'Not Found',
      });
    }

    const queryKey = getQueryKey(movieId);

    return (
      queryClient.getQueryData<GetMoviesResponse>(queryKey) ??
      (await queryClient.fetchQuery({
        queryFn: async () => getMovieDetail(movieId),
        queryKey,
      }))
    );
  };
