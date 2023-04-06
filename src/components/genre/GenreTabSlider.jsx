import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';

const GenreSlider = ({ genreTabList, genreTabActive, onClickGenreTab }) => {
  return (
    <Container>
      <h2 className="blind">장르별영화</h2>
      <Swiper
        className="genreSlider"
        slidesPerView="auto"
        breakpoints={{
          1024: { spaceBetween: 20 },
          320: { spaceBetween: 10 },
        }}
      >
        {genreTabList.map((genre) => (
          <SwiperSlide
            key={genre.id}
            className={genreTabActive === genre.id && 'active'}
            onClick={() => onClickGenreTab(genre.id)}
          >
            {genre.name}
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};
const Container = styled.div`
  padding-top: 10rem;
  @media ${({ theme }) => theme.devices.tablet} {
    padding-top: 8rem;
  }
  @media ${({ theme }) => theme.devices.mobile} {
    padding-top: 6rem;
  }
  .genreSlider {
    padding: 3rem 0;
    @media ${({ theme }) => theme.devices.mobile} {
      padding: 2rem 0;
    }
    .swiper-slide {
      width: auto;
      background-color: ${({ theme }) => theme.colors.gray[800]};
      border: 1px solid transparent;
      border-radius: 5rem;
      padding: 1rem 1.4rem;
      font-size: 1.6rem;
      cursor: pointer;
      @media ${({ theme }) => theme.devices.mobile} {
        padding: 0.6rem 1rem;
        font-size: 1.2rem;
      }
      &.active {
        color: ${({ theme }) => theme.colors.subColor};
        border-color: ${({ theme }) => theme.colors.subColor};
      }
    }
  }
`;

export default GenreSlider;
