import axios from 'axios';

import { BASE_URL, MovieListType } from './constants';

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_KEY}`,
  },
});

export async function getMovies(type: MovieListType, page: number) {
  const typeMap = {
    'coming-soon': 'upcoming',
    'now-playing': 'now_playing',
    popular: 'popular',
  };

  const { data } = await apiClient.get<GetMoviesResponse>(
    `/${typeMap[type]}?page=${page}`
  );
  return data;
}

export async function getMovieDetail(id: string) {
  const { data } = await apiClient.get<GetMovieDetailResponse>(`/${id}`);
  return data;
}

export function makeImageUrl(path: string) {
  return `https://image.tmdb.org/t/p/w500${path}`;
}

export function makeBackdropUrl(path: string) {
  return `https://image.tmdb.org/t/p/original${path}`;
}
