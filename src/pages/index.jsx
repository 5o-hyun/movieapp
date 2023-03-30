import React from 'react';

import MainSliderContainer from '@container/MainSliderContainer';

import BaseLayout from '@components/layout/BaseLayout';
import ContentsLayout from '@components/layout/ContentsLayout';

const index = () => {
  return (
    <BaseLayout>
      <MainSliderContainer />
      <ContentsLayout></ContentsLayout>
    </BaseLayout>
  );
};

export default index;
