import { defaultAxios } from './defaultAxios';

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
