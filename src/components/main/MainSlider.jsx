import React from 'react';
import { Link } from 'react-router-dom';
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
          <StyledSwiperSlide
            key={movie.id}
            backdroppath={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
          >
            <div className="cover">
              <Link to={`/list/movie/${movie.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="moviePoster"
                />
                <div className="contents">
                  <Star point={movie.vote_average} />
                  <p className="movieName">{movie.title}</p>
                </div>
                <Gradient />
              </Link>
            </div>
          </StyledSwiperSlide>
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
  .swiper-pagination {
    .swiper-pagination-bullet {
      background-color: ${({ theme }) => theme.colors.gray[100]};
    }
    .swiper-pagination-bullet-active-main {
      background-color: ${({ theme }) => theme.colors.subColor};
    }
  }
`;

const StyledSwiperSlide = styled(SwiperSlide)`
  height: 100%;
  padding-bottom: ${({ theme }) => theme.spacing.base};
  text-align: center;
  cursor: pointer;
  background: url(${(props) => `"${props.backdroppath}"`}) no-repeat;
  background-size: cover;
  .cover {
    background-color: rgba(0, 0, 0, 0.7);
  }
  .moviePoster {
    width: 50rem;
    @media ${({ theme }) => theme.devices.mobile} {
      width: 100%;
    }
  }
  .contents {
    position: absolute;
    bottom: 10%;
    left: 50%;
    transform: translateX(-50%);
    width: 1024px;
    height: 5rem;
    z-index: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 ${({ theme }) => theme.spacing.bigLarge};
    font-size: 1.6rem;
    text-align: right;
    @media ${({ theme }) => theme.devices.tablet} {
      width: 100%;
    }
    @media ${({ theme }) => theme.devices.mobile} {
      padding: 0 ${({ theme }) => theme.spacing.base};
      font-size: 1.4rem;
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
