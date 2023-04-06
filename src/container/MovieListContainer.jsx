import React, { useEffect, useMemo, useState } from 'react';

import { getGenres } from '@lib/api/movie';

import GenreSlider from '@components/common/GenreSlider';

const MovieListContainer = () => {
  const [tabs, setTabs] = useState();
  const [genreTabActive, setGenreTabActive] = useState(-1);

  // 장르 탭 active
  const onClickGenreTab = (id) => {
    setGenreTabActive(id);
  };

  // 장르 받아오기
  useEffect(() => {
    const getGenreList = async (type) => {
      const result = await getGenres('movie');
      setTabs(result.genres);
    };
    getGenreList();
  }, []);

  // 장르 받아온걸 '전체'추가후 새로운 배열로 만들기
  const genreList = useMemo(() => {
    if (!tabs) return null;
    const genreListCopy = JSON.parse(JSON.stringify(tabs));
    genreListCopy.unshift({
      id: -1,
      name: '전체',
    });
    return genreListCopy;
  }, [tabs]);

  if (!tabs) return null;

  return (
    <>
      <GenreSlider
        genreList={genreList}
        genreTabActive={genreTabActive}
        onClickGenreTab={onClickGenreTab}
      />
    </>
  );
};

export default MovieListContainer;
