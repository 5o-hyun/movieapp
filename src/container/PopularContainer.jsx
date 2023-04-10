import React, { useState } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';

import { getGenreMovies } from '@lib/api/movie';

import Title from '@components/common/Title';
import PopularList from '@components/main/PopularList';
import PopularSlider from '@components/main/PopularSlider';

const PopularContainer = () => {
  const [videoTypes, setVideoTypes] = useState([
    {
      id: 1,
      typeNameKo: '영화',
      typeNameEn: 'movie',
      genre: [
        { id: 12, name: '모험', movies: [] },
        { id: 14, name: '판타지', movies: [] },
        { id: 16, name: '애니메이션', movies: [] },
      ],
    },
    {
      id: 2,
      typeNameKo: 'TV',
      typeNameEn: 'tv',
      genre: [
        { id: 18, name: '드라마', movies: [] },
        { id: 35, name: '코미디', movies: [] },
        { id: 99, name: '다큐멘터리', movies: [] },
      ],
    },
  ]);

  useEffect(() => {
    videoTypes.map((videoType) =>
      videoType.genre.map(async (genreItem) => {
        genreItem.movies = (
          await getGenreMovies(videoType.typeNameEn, genreItem.id)
        ).results;
        setVideoTypes((prevState) => Object.assign([], videoTypes));
        // axios
        //   .get(
        //     `https://api.themoviedb.org/3/discover/${videoType.typeNameEn}?api_key=0cef53adbd0dec528ee38372eaa058b2&language=ko-KO&with_genres=${genreItem.id}`
        //   )
        //   .then((response) => {
        //     genreItem.movies = response.data.results;
        //     setVideoTypes((prevState) => Object.assign([], videoTypes));
        //   });
      })
    );
  }, []);

  return (
    <>
      {videoTypes.map((videoType) => (
        <Container key={videoType.id}>
          <h2 className="blind">{`Weekly ${videoType.typeNameKo} TOP 20`}</h2>
          <Title
            name={`Weekly ${videoType.typeNameKo} TOP 20`}
            icon
            italic="true"
          />
          <PopularSlider videoType={videoType} />
          <PopularList videoType={videoType} />
        </Container>
      ))}
    </>
  );
};
const Container = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.bigLarge};
  @media ${({ theme }) => theme.devices.mobile} {
    margin-bottom: ${({ theme }) => theme.spacing.large};
  }
`;

export default PopularContainer;
