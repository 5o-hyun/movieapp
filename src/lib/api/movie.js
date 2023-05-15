import { defaultAxios, defaultAxiosBasic } from './defaultAxios';

// 장르에따른 영화목록 가져오기
export const getGenreMovies = async (typeNameEn, genreId) => {
  const response = await defaultAxios.get(
    `/discover/${typeNameEn}?&with_genres=${genreId}`
  );
  return response.data;
};

// 영화목록 가져오기
export const getMovies = async (typeNameEn) => {
  const response = await defaultAxios.get(`/discover/${typeNameEn}`);
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
export const getMovie = async (type, movieId) => {
  const response = await defaultAxios.get(`/${type}/${movieId}`);
  return response.data;
};

// 영화 1개 정보의 사람(출연진,제작진) 가져오기
export const getPersons = async (type, movieId) => {
  const response = await defaultAxios.get(`/${type}/${movieId}/credits`);
  return response.data;
};

// 영화 1개 정보의 포스터들 가져오기
export const getPosters = async (type, movieId) => {
  const response = await defaultAxiosBasic.get(`/${type}/${movieId}/images`);
  return response.data;
};

// 영화 1개 정보의 리뷰 가져오기
export const getReviews = async (type, movieId) => {
  const response = await defaultAxiosBasic.get(`/${type}/${movieId}/reviews`);
  return response.data;
};

// 검색 탭
export const getSearch = async (type, text) => {
  const response = await defaultAxios.get(`/search/${type}`, {
    params: {
      query: text,
    },
  });
  return response.data;
};
