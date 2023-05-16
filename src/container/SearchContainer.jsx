import React from 'react';
import { useEffect, useState } from 'react';

import { getSearch } from '@lib/api/movie';
import { videoTypes } from '@lib/data/data';

import Navigation from '@components/base/Navigation';
import ContentsLayout from '@components/layout/ContentsLayout';
import SearchHeader from '@components/search/SearchHeader';
import SearchListItem from '@components/search/SearchListItem';

const SearchContainer = () => {
  const [videoTypeActive, setVideoTypeActive] = useState('movie');
  const [searchLists, setSearchLists] = useState();
  const [isSearchTab, setIsSearchTab] = useState(1);
  const [searchText, setSearchText] = useState('');

  const onClickSearchTab = (videoTypeId) => {
    setIsSearchTab(videoTypeId);
    videoTypes.map(
      (videoType) =>
        videoType.id === videoTypeId && setVideoTypeActive(videoType.name)
    );
  };

  const onChangeSearchText = (e) => {
    setSearchText(e.target.value);
  };

  useEffect(() => {
    const getSearchAxios = async (type, text) => {
      const result = await getSearch(`${videoTypeActive}`, `${searchText}`);
      setSearchLists(result.results);
    };
    getSearchAxios();
  }, [searchText, videoTypeActive]);

  if (!searchLists) return null;
  return (
    <>
      <SearchHeader
        videoTypes={videoTypes}
        isSearchTab={isSearchTab}
        onClickSearchTab={onClickSearchTab}
        onChangeSearchText={onChangeSearchText}
      />
      <ContentsLayout>
        <SearchListItem
          searchLists={searchLists}
          videoTypeActive={videoTypeActive}
        />
      </ContentsLayout>
      <Navigation />
    </>
  );
};

export default SearchContainer;
