import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import { getQueryKey } from '../pages/MovieDetail/loader';

function useMovieDetailData() {
  const { movieId } = useParams() as { movieId: string };
  const { data } = useQuery<GetMovieDetailResponse>({
    queryKey: getQueryKey(movieId),
  });
  return data;
}

export default useMovieDetailData;
