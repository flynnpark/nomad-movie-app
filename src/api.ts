import axios from 'axios';

import { BASE_URL, MovieListType } from './constants';

// CodeSandbox 문제로 인해 API키 추가
const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOWM5OTk1ZGE0OTM5NTVjYTk5ZmU0YmU0YzFkNjBhNCIsInN1YiI6IjVhYjk5MzE1MGUwYTI2MzY0ODAwYmFiZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ErNg1ZIlSWbXMfOv3qN40WeMBivrS2aDgqyE6D0CCSw`,
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
