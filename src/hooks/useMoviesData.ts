import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';

import { MovieListType } from '../constants';
import { getQueryKey } from '../pages/Home/loader';

function useMoviesData() {
  const [params] = useSearchParams({ type: MovieListType.POPULAR });
  const type = params.get('type') as MovieListType;
  const { data } = useQuery<GetMoviesResponse>({
    queryKey: getQueryKey(type),
  });
  return data;
}

export default useMoviesData;
