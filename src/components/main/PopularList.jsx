import React, { useState } from 'react';
import { useEffect } from 'react';

import PopularListItem from '@components/main/PopularListItem';

const PopularList = ({ videoType }) => {
  const [getNumbers, setGetNumbers] = useState();
  const genreNumbers = [
    { id: 1, genreName: 'movie', numbers: [12, 16, 18] },
    { id: 2, genreName: 'tv', numbers: [18, 35, 99] },
  ];

  const getGenreNumbers = () => {
    genreNumbers.map(
      (genre) =>
        videoType.typeNameEn === genre.genreName && setGetNumbers(genre.numbers)
    );
  };

  useEffect(() => {
    getGenreNumbers();
  }, []);

  if (!getNumbers) return null;

  return (
    <>
      {getNumbers.map((getNumber) => (
        <PopularListItem genreNumber={getNumber} videoType={videoType} />
      ))}
    </>
  );
};

export default PopularList;
