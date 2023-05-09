import React from 'react';
import styled from 'styled-components';

const SeasonSlider = () => {
  return <Container></Container>;
};
const Container = styled.div`
  width: 1024px;
  margin: 0 auto;
  margin-bottom: ${({ theme }) => theme.spacing.bigLarge};
  @media ${({ theme }) => theme.devices.tablet} {
    width: 100%;
  }
  @media ${({ theme }) => theme.devices.mobile} {
    margin-bottom: ${({ theme }) => theme.spacing.smallMedium};
  }
  .title {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.white};
    margin-bottom: ${({ theme }) => theme.spacing.base};
  }
  .posterSlider {
    width: 100%;
    display: flex;
    aspect-ratio: 1 / 0.244140625;
    @media ${({ theme }) => theme.devices.tablet} {
      aspect-ratio: 1 / 0.3;
    }
    .swiper-slide {
      background-color: ${({ theme }) => theme.colors.color};
    }
  }
`;

export default SeasonSlider;
