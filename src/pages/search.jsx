import React from 'react';

import SearchContainer from '@container/SearchContainer';

import Navigation from '@components/base/Navigation';
import ContentsLayout from '@components/layout/ContentsLayout';
import SearchHeader from '@components/search/SearchHeader';

const search = () => {
  return (
    <>
      <SearchHeader />
      <ContentsLayout>
        <SearchContainer />
        <Navigation />
      </ContentsLayout>
    </>
  );
};

export default search;
