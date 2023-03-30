import React from 'react';
import styled from 'styled-components';

import Title from '@components/common/Title';
import PopularList from '@components/main/PopularList';
import PopularSlider from '@components/main/PopularSlider';

const Popular = ({ videoType }) => {
  return (
    <Container>
      <h2 className="blind">{`Weekly ${videoType.typeNameKo} TOP 20`}</h2>
      <Title
        name={`Weekly ${videoType.typeNameKo} TOP 20`}
        icon
        italic="true"
      />
      <PopularSlider videoType={videoType} />
      <PopularList videoType={videoType} />
    </Container>
  );
};
const Container = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.bigLarge};
  @media ${({ theme }) => theme.devices.mobile} {
    margin-bottom: ${({ theme }) => theme.spacing.large};
  }
`;

export default Popular;
