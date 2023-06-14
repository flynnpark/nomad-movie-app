import axios from 'axios';

import { BASE_URL } from './constants';

const apiClient = axios.create({ baseURL: BASE_URL });

export async function getPopular() {
  const { data } = await apiClient.get<GetMoviesResponse>('/popular');
  return data;
}

export async function getNowPlaying() {
  const { data } = await apiClient.get<GetMoviesResponse>('/now-playing');
  return data;
}

export async function getComingSoon() {
  const { data } = await apiClient.get<GetMoviesResponse>('/coming-soon');
  return data;
}

export async function getMovie(id: string) {
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
