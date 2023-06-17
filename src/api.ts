import axios from 'axios';

import { BASE_URL, MovieListType } from './constants';

const apiClient = axios.create({ baseURL: BASE_URL });

export async function getMovies(type: MovieListType) {
  const { data } = await apiClient.get<GetMoviesResponse>(`/${type}`);
  return data;
}

export async function getMovieDetail(id: string) {
  const { data } = await apiClient.get<GetMovieDetailResponse>('/movie', {
    params: {
      id,
    },
  });
  return data;
}

export function makeImageUrl(path: string) {
  return `https://image.tmdb.org/t/p/w500${path}`;
}

export function makeBackdropUrl(path: string) {
  return `https://image.tmdb.org/t/p/original${path}`;
}
