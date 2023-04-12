import React, { useEffect } from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

import { getMovie } from '@lib/api/movie';

import MovieInfo from '@components/detail/MovieInfo';

const DetailContainer = () => {
  const location = useLocation();
  const locationMovieId = location.pathname.split('/').pop();

  const [movie, setMovie] = useState();

  useEffect(() => {
    const getMovieAxios = async (movieId) => {
      const result = await getMovie(locationMovieId);
      setMovie(result);
    };
    getMovieAxios();
  }, []);

  if (!movie) return null;

  return (
    <Container>
      <MovieInfo movie={movie} />
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
