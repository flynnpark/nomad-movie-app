import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { MovieListType } from '../constants';

function useTypeFromQuery() {
  const [params] = useSearchParams();
  const [type, setType] = useState<MovieListType>(MovieListType.POPULAR);

  useEffect(() => {
    const paramType = params.get('type') as MovieListType | null;
    if (paramType) {
      setType(paramType);
    }
  }, [params]);

  return type;
}

export default useTypeFromQuery;
