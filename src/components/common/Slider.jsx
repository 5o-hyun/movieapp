import React from 'react';
import styled from 'styled-components';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

const Slider = ({ genreMovies }) => {
  if (!genreMovies) return null;
  return (
    <Container>
      <Swiper
        breakpoints={{
          1024: { slidesPerView: 5.5, spaceBetween: 30 },
          320: { slidesPerView: 3.5, spaceBetween: 10 },
        }}
        className="sliderSwiper"
      >
        {genreMovies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500` + movie.poster_path}
              alt={movie.title}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};
const Container = styled.div`
  .sliderSwiper {
    .swiper-slide {
      aspect-ratio: 1 / 1.5;
      background-color: #333;
      overflow: visible;
      position: relative;
      img.moviePoster {
      }
    }
  }
`;

export default Slider;
