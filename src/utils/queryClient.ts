import type { QueryFunctionContext } from '@tanstack/react-query';

import { QueryClient } from '@tanstack/react-query';
import axios from 'axios';

import { BASE_URL } from '../constants';

const defaultQueryFn = async ({ queryKey }: QueryFunctionContext) => {
  const { data } = await axios.get(`${BASE_URL}/${queryKey.join('/')}`);
  return data;
};

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: defaultQueryFn,
      refetchInterval: false,
      refetchIntervalInBackground: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
    },
  },
});
