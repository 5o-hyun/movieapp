import React, { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';

import { getGenreMovies, getGenres } from '@lib/api/movie';

import GenreListItem from '@components/genre/GenreListItem';
import GenreTabSlider from '@components/genre/GenreTabSlider';

const GenreListContainer = () => {
  const [tabs, setTabs] = useState();
  const [genreTabActive, setGenreTabActive] = useState(-1);
  const [genreContentsList, setGenreContentsList] = useState();

  // 장르 탭 active
  const onClickGenreTab = (id) => {
    setGenreTabActive(id);
  };

  // 장르 받아오기
  useEffect(() => {
    const getGenresAxios = async (type) => {
      const result = await getGenres('movie');
      setTabs(result.genres);
    };
    getGenresAxios();
  }, []);

  // 장르에 따른 영화목록 받아오기
  useEffect(() => {
    const getGenreMoviesAxios = async (typeNameEn, genreId) => {
      const result = await getGenreMovies('movie', `${genreTabActive}`);
      setGenreContentsList(result.results);
    };
    getGenreMoviesAxios();
  }, [genreTabActive]);

  // 장르 받아온걸 '전체'추가후 새로운 배열로 만들기
  const genreTabList = useMemo(() => {
    if (!tabs) return null;
    const genreListCopy = JSON.parse(JSON.stringify(tabs));
    genreListCopy.unshift({
      id: -1,
      name: '전체',
    });
    return genreListCopy;
  }, [tabs]);

  if (!genreContentsList) return null;
  if (!tabs) return null;

  return (
    <>
      <GenreTabSlider
        genreTabList={genreTabList}
        genreTabActive={genreTabActive}
        onClickGenreTab={onClickGenreTab}
      />
      <GenreContentsList>
        {genreContentsList.map((genreContentsItem) => (
          <GenreListItem
            key={genreContentsItem.id}
            genreContentsItem={genreContentsItem}
          />
        ))}
      </GenreContentsList>
    </>
  );
};
const GenreContentsList = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: ${({ theme }) => theme.spacing.base};
  @media ${({ theme }) => theme.devices.mobile} {
    grid-template-columns: repeat(4, 1fr);
    gap: ${({ theme }) => theme.spacing.tiny};
  }
`;

export default GenreListContainer;
