import { useQuery } from '@tanstack/react-query';

import { getQueryKey } from '../pages/Home/loader';
import useTypeFromQuery from './useTypeFromQuery';

function useMoviesData() {
  const type = useTypeFromQuery();
  const { data } = useQuery<GetMoviesResponse>({
    queryKey: getQueryKey(type),
  });
  return data;
}

export default useMoviesData;
