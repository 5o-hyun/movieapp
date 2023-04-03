import axios from 'axios';

const baseURL = 'https://api.themoviedb.org/3';

export const defaultAxios = axios.create({
  baseURL,
  params: {
    api_key: '0cef53adbd0dec528ee38372eaa058b2',
    language: 'ko-KO',
  },
});
