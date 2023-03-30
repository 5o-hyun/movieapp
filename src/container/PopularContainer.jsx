import React from 'react';

import Popular from '../components/main/Popular';

const PopularContainer = () => {
  const videoTypes = [
    { id: 1, typeNameKo: '영화', typeNameEn: 'movie' },
    { id: 2, typeNameKo: 'TV', typeNameEn: 'tv' },
  ];
  return (
    <>
      {videoTypes.map((videoType) => (
        <Popular key={videoType.id} videoType={videoType} />
      ))}
    </>
  );
};

export default PopularContainer;
