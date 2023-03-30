import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import MainSlider from '@components/main/MainSlider';

const MainSliderContainer = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get(
        'https://api.themoviedb.org/3/trending/movie/day?api_key=0cef53adbd0dec528ee38372eaa058b2&language=ko-KO'
      )
      .then((response) => {
        if (response.status === 200) {
          setMovies(response.data.results);
        }
      });
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
