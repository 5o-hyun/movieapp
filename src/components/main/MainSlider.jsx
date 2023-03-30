import React from 'react';
import styled from 'styled-components';
import { Autoplay, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

import Star from '@components/common/Star';

const MainSlider = ({ movies }) => {
  return (
    <Container>
      <Swiper
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        loop={true}
        autoplay={{
          delay: 2000,
        }}
        speed={500}
        modules={[Pagination, Autoplay]}
        className="mainSliderSwiper"
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500` + movie.poster_path}
              alt={movie.title}
              className="moviePoster"
            />
            <div className="contents">
              <Star point={movie.vote_average} />
              <p className="movieName">{movie.title}</p>
            </div>
            <Gradient />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
  height: 70rem;
  @media ${({ theme }) => theme.devices.tablet} {
    height: 60rem;
  }
  @media ${({ theme }) => theme.devices.mobile} {
    height: auto;
    aspect-ratio: 1 / 1.25;
  }
  .mainSliderSwiper {
    height: 100%;
    padding-bottom: ${({ theme }) => theme.spacing.base};
    text-align: center;
    cursor: pointer;
    .moviePoster {
      width: 50rem;
      @media ${({ theme }) => theme.devices.mobile} {
        width: 100%;
      }
    }
    .contents {
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 5rem;
      z-index: 1;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 ${({ theme }) => theme.spacing.bigLarge};
      font-size: 1.6rem;
      text-align: right;
      @media ${({ theme }) => theme.devices.mobile} {
        padding: 0 ${({ theme }) => theme.spacing.base};
        font-size: 1.4rem;
      }
    }
    .swiper-pagination {
      .swiper-pagination-bullet {
        background-color: ${({ theme }) => theme.colors.gray[100]};
      }
      .swiper-pagination-bullet-active-main {
        background-color: ${({ theme }) => theme.colors.subColor};
      }
    }
  }
`;
const Gradient = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 80%;
  background-image: linear-gradient(
    to top,
    ${({ theme }) => theme.colors.backgroundColor} 10%,
    transparent
  );
  pointer-events: none;
`;

export default MainSlider;
