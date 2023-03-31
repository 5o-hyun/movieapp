import React from 'react';
import styled from 'styled-components';

import Slider from '@components/common/Slider';
import Title from '@components/common/Title';

const PopularListItem = ({ genre, videoType }) => {
  return (
    <Container>
      <h3 className="blind">{videoType.typeNameKo + '/' + genre.name}</h3>
      <Title
        name={videoType.typeNameKo + '/' + genre.name}
        icon
        fontSize={1.6}
      />
      <Slider genreMovies={genre.movies} />
    </Container>
  );
};
const Container = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.base};
`;

export default PopularListItem;
