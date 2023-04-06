import React from 'react';

import MovieListContainer from '@container/MovieListContainer';

import BaseLayout from '@components/layout/BaseLayout';
import ContentsLayout from '@components/layout/ContentsLayout';

const movie = () => {
  return (
    <BaseLayout>
      <ContentsLayout>
        <MovieListContainer />
      </ContentsLayout>
    </BaseLayout>
  );
};

export default movie;
