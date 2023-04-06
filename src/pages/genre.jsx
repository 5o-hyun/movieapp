import React from 'react';

import GenreListContainer from '@container/GenreListContainer';

import BaseLayout from '@components/layout/BaseLayout';
import ContentsLayout from '@components/layout/ContentsLayout';

const movie = () => {
  return (
    <BaseLayout>
      <ContentsLayout>
        <GenreListContainer />
      </ContentsLayout>
    </BaseLayout>
  );
};

export default movie;
