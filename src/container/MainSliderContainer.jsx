import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { getTrendingMovies } from '@lib/api/movie';

import MainSlider from '@components/main/MainSlider';

const MainSliderContainer = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const getMoviesTrending = async (typeNameEn, period) => {
      const result = await getTrendingMovies('movie', 'day');
      setMovies(result);
    };
    getMoviesTrending();
  }, []);

  return (
    <Container>
      <h2 className="blind">인기영화</h2>
      <MainSlider movies={movies} />
    </Container>
  );
};
const Container = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.bigLarge};
  @media ${({ theme }) => theme.devices.mobile} {
    margin-bottom: ${({ theme }) => theme.spacing.large};
  }
`;

export default MainSliderContainer;
