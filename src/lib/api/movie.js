import { defaultAxios, defaultAxiosBasic } from './defaultAxios';

// 장르에따른 영화목록 가져오기
export const getGenreMovies = async (typeNameEn, genreId) => {
  const response = await defaultAxios.get(
    `/discover/${typeNameEn}?&with_genres=${genreId}`
  );
  return response.data;
};

// day or week에 따른 인기영화목록 가져오기
export const getTrendingMovies = async (typeNameEn, period) => {
  const response = await defaultAxios.get(`/trending/${typeNameEn}/${period}`);
  return response.data.results;
};

// 장르조회
export const getGenres = async (type) => {
  const response = await defaultAxios.get(`genre/${type}/list`);
  return response.data;
};

// 영화 1개 정보 가져오기
export const getMovie = async (movieId) => {
  const response = await defaultAxios.get(`/movie/${movieId}`);
  return response.data;
};

// 영화 1개 정보의 사람(출연진,제작진) 가져오기
export const getPersons = async (movieId) => {
  const response = await defaultAxios.get(`/movie/${movieId}/credits`);
  return response.data;
};

// 영화 1개 정보의 포스터들 가져오기
export const getPosters = async (movieId) => {
  const response = await defaultAxiosBasic.get(`/movie/${movieId}/images`);
  return response.data;
};

// 영화 1개 정보의 리뷰 가져오기
export const getReviews = async (movieId) => {
  const response = await defaultAxiosBasic.get(`/movie/${movieId}/reviews`);
  return response.data;
};
