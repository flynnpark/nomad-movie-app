import { useSearchParams } from 'react-router-dom';

import { MovieListType } from '../constants';

function useTypeFromQuery() {
  const [params] = useSearchParams({ type: MovieListType.POPULAR });
  const type = params.get('type') as MovieListType;
  return type;
}

export default useTypeFromQuery;
