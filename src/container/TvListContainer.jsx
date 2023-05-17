import React, { useEffect, useMemo } from 'react';
import { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { getGenreMovies, getGenres, getMovies } from '@lib/api/movie';

import GenreListItem from '@components/list/GenreListItem';
import GenreTabSlider from '@components/list/GenreTabSlider';

const TvListContainer = () => {
  const [tabs, setTabs] = useState();
  const [genreTabActive, setGenreTabActive] = useState(-1);
  const [genreContentsList, setGenreContentsList] = useState([]);
  const [page, setPage] = useState(1);

  const navigate = useNavigate();
  // 장르 탭 active
  const onClickGenreTab = (id) => {
    setGenreTabActive(id);
    setPage(1);
    if (id === -1) {
      navigate(``, { replace: true });
      return;
    }
    navigate(`?genre=${id}`, { replace: true });
  };

  // 장르 받아오기
  useEffect(() => {
    const getGenresAxios = async (type) => {
      const result = await getGenres('tv');
      setTabs(result.genres);
    };
    getGenresAxios();
  }, []);

  // 장르에 따른 영화목록 받아오기
  const getMoviesAxios = async (typeNameEn, pageNumber) => {
    const result = await getMovies('tv', page);
    const newData = result.results;
    setGenreContentsList((prev) => [...prev, ...newData]);
    setPage((prev) => prev + 1);
  };

  const getGenreMoviesAxios = async (typeNameEn, genreId, pageNumber) => {
    const response = await getGenreMovies('tv', `${genreTabActive}`, page);
    const newData = response.results;
    setGenreContentsList((prev) => [...prev, ...newData]);
    setPage((prev) => prev + 1);
  };

  const fetchData = () => {
    if (genreTabActive === -1) {
      getMoviesAxios();
      return;
    }
    getGenreMoviesAxios();
  };

  useEffect(() => {
    setGenreContentsList([]);
    fetchData();
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

  if (!tabs) return null;

  return (
    <>
      <GenreTabSlider
        genreTabList={genreTabList}
        genreTabActive={genreTabActive}
        onClickGenreTab={onClickGenreTab}
      />
      <InfiniteScroll
        dataLength={genreContentsList.length}
        next={fetchData}
        hasMore={true}
        loader={<p>Loading...</p>}
        style={{ overflow: 'hidden' }}
      >
        <GenreContentsList>
          {genreContentsList.map((genreContentsItem, index) => (
            <GenreListItem
              key={index}
              contents={'tv'}
              genreContentsItem={genreContentsItem}
            />
          ))}
        </GenreContentsList>
      </InfiniteScroll>
    </>
  );
};
const GenreContentsList = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(5, 1fr);
  gap: ${({ theme }) => theme.spacing.base};
  @media ${({ theme }) => theme.devices.mobile} {
    grid-template-columns: repeat(4, 1fr);
    gap: ${({ theme }) => theme.spacing.tiny};
  }
`;

export default TvListContainer;
