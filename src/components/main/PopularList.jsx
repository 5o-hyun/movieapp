import React from 'react';

import PopularListItem from '@components/main/PopularListItem';

const PopularList = ({ videoType }) => {
  return (
    <>
      {videoType.genre.map((genre) => (
        <PopularListItem key={genre.id} genre={genre} videoType={videoType} />
      ))}
    </>
  );
};

export default PopularList;
