import React from 'react';

import TvListContainer from '@container/TvListContainer';

import BaseLayout from '@components/layout/BaseLayout';
import ContentsLayout from '@components/layout/ContentsLayout';

const tv = () => {
  return (
    <BaseLayout>
      <ContentsLayout>
        <TvListContainer />
      </ContentsLayout>
    </BaseLayout>
  );
};

export default tv;
