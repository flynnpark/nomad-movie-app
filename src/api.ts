import axios from 'axios';

import { BASE_URL } from './constants';
import { MovieListType } from './types/app';

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

export function makeImagePath(image: string) {
  return `https://image.tmdb.org/t/p/w500${image}`;
}

export function makeBgPath(image: string) {
  return `https://image.tmdb.org/t/p/original${image}`;
}
