import React from 'react';

import DetailContainer from '@container/DetailContainer';

import BaseLayout from '@components/layout/BaseLayout';
import ContentsLayout from '@components/layout/ContentsLayout';

const detail = () => {
  return (
    <BaseLayout>
      <ContentsLayout>
        <DetailContainer />
      </ContentsLayout>
    </BaseLayout>
  );
};

export default detail;
