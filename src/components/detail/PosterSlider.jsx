import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';

const PosterSlider = ({ posters }) => {
  return (
    <Container>
      <p className="title">포스터 ({posters.length})</p>
      <Swiper
        className="posterSlider"
        slidesPerView={5.5}
        spaceBetween={20}
        breakpoints={{
          1024: { slidesPerView: 5.5, spaceBetween: 20 },
          320: { slidesPerView: 4.5, spaceBetween: 10 },
        }}
      >
        {posters.map((poster, index) => (
          <SwiperSlide key={index}>
            <img
              src={`https://image.tmdb.org/t/p/w500${poster.file_path}`}
              alt=""
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};
const Container = styled.div`
  width: 1024px;
  margin: 0 auto;
  padding-bottom: ${({ theme }) => theme.spacing.bigLarge};
  @media ${({ theme }) => theme.devices.tablet} {
    width: 100%;
  }
  @media ${({ theme }) => theme.devices.mobile} {
    padding-bottom: ${({ theme }) => theme.spacing.smallMedium};
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

export default PosterSlider;
