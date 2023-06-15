import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';

import { getQueryKey } from '../pages/Home/loader';
import { MovieListType } from '../types/app';

function useMoviesData() {
  const [params] = useSearchParams({ type: 'popular' });
  const type = params.get('type') as MovieListType;
  const { data } = useQuery<GetMoviesResponse>({
    queryKey: getQueryKey(type),
  });
  return data;
}

export default useMoviesData;
