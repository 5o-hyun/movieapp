import React, { useEffect } from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

import { getMovie, getPersons } from '@lib/api/movie';

import MovieInfo from '@components/detail/MovieInfo';
import PersonSlider from '@components/detail/PersonSlider';

const DetailContainer = () => {
  const location = useLocation();
  const locationMovieId = location.pathname.split('/').pop();

  const [movie, setMovie] = useState();
  const [cast, setCast] = useState();
  const [crew, setCrew] = useState();

  useEffect(() => {
    const getMovieAxios = async (movieId) => {
      const result = await getMovie(locationMovieId);
      setMovie(result);
    };
    getMovieAxios();
  }, []);

  useEffect(() => {
    const getPersonsAxios = async (movieId) => {
      const result = await getPersons(locationMovieId);
      setCast(result.cast);
      setCrew(result.crew);
    };
    getPersonsAxios();
  }, []);

  if (!movie) return null;
  if (!crew) return null;

  return (
    <Container>
      <MovieInfo movie={movie} />
      <PersonSlider persons={cast} title="출연진" />
      <PersonSlider persons={crew} title="제작진" />
    </Container>
  );
};
const Container = styled.div`
  padding-top: 10rem;
  @media ${({ theme }) => theme.devices.tablet} {
    padding-top: 8rem;
  }
  @media ${({ theme }) => theme.devices.mobile} {
    padding-top: 6rem;
  }
`;

export default DetailContainer;
