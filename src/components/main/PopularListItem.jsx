import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Slider from '@components/common/Slider';
import Title from '@components/common/Title';

const PopularListItem = ({ genreNumber, videoType }) => {
  // 장르 이름 (애니메이션,공포...)
  const [genreName, setGenreName] = useState();
  // 장르별 영화들
  const [genreMovies, setGenreMovies] = useState();

  // 장르찾기
  useEffect(() => {
    axios
      .get(
        'https://api.themoviedb.org/3/genre/movie/list?api_key=0cef53adbd0dec528ee38372eaa058b2&language=ko-KO'
      )
      .then((response) => {
        if (response.status === 200) {
          response.data.genres.map((genre) => {
            if (genre.id === genreNumber) {
              setGenreName(genre.name);
            }
          });
        }
      });
  }, []);
  // 장르에따른 영화목록 찾기
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=0cef53adbd0dec528ee38372eaa058b2&language=ko-KO&with_genres=${genreNumber}`
      )
      .then((response) => setGenreMovies(response.data.results));
  }, []);

  return (
    <Container>
      <h3 className="blind">{videoType.typeNameKo + '/' + genreName}</h3>
      <Title
        name={videoType.typeNameKo + '/' + genreName}
        icon
        fontSize={1.6}
      />
      <Slider genreMovies={genreMovies} />
    </Container>
  );
};
const Container = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.base};
`;

export default PopularListItem;
