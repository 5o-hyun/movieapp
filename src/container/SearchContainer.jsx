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

  const onClickSearchTab = (videoTypeId) => {
    setIsSearchTab(videoTypeId);
    videoTypes.map(
      (videoType) =>
        videoType.id === videoTypeId && setVideoTypeActive(videoType.name)
    );
  };

  useEffect(() => {
    const getSearchAxios = async (type, text) => {
      const result = await getSearch(`${videoTypeActive}`, '심슨');
      setSearchLists(result.results);
    };
    getSearchAxios();
  }, [videoTypeActive]);

  if (!searchLists) return null;
  return (
    <>
      <SearchHeader
        videoTypes={videoTypes}
        isSearchTab={isSearchTab}
        onClickSearchTab={onClickSearchTab}
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
