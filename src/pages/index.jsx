import React from 'react';

import MainSliderContainer from '@container/MainSliderContainer';
import PopularContainer from '@container/PopularContainer';

import BaseLayout from '@components/layout/BaseLayout';
import ContentsLayout from '@components/layout/ContentsLayout';

const index = () => {
  return (
    <BaseLayout>
      <MainSliderContainer />
      <ContentsLayout>
        <PopularContainer />
      </ContentsLayout>
    </BaseLayout>
  );
};

export default index;
