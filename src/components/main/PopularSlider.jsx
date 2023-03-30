import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

import Star from '@components/common/Star';

const PopularSlider = ({ videoType }) => {
  const [popularContents, setPopularContents] = useState();
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/trending/${videoType.typeNameEn}/week?api_key=0cef53adbd0dec528ee38372eaa058b2&language=ko-KO`
      )
      .then((response) => {
        const sortMovies = response.data.results;
        setPopularContents(
          sortMovies.sort((a, b) => b.popularity - a.popularity)
        );
      });
  }, []);
  if (!popularContents) return null;

  return (
    <Container>
      <Swiper slidesPerView={3.5} spaceBetween={10} className="popularSwiper">
        {popularContents.map((contents, index) => (
          <SwiperSlide key={contents.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500` + contents.poster_path}
              alt={contents.title}
              className="poster"
            />
            <div className="contents">
              <em className="rank">{index + 1}</em>
              <StyledStar point={contents.vote_average} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};
const Container = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.base};
  .popularSwiper {
    padding-top: 2rem;
    .swiper-slide {
      aspect-ratio: 1 / 1.5;
      background-color: #333;
      overflow: visible;
      position: relative;
      img.poster {
        position: absolute;
      }
      .contents {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        .rank {
          color: ${({ theme }) => theme.colors.white};
          font-size: 6rem;
          font-weight: bold;
          position: absolute;
          top: -2.4rem;
          left: -1rem;
          @media ${({ theme }) => theme.devices.mobile} {
            font-size: 3.4rem;
            top: -1.2rem;
            left: -0.5rem;
          }
        }
      }
    }
  }
`;
const StyledStar = styled(Star)`
  position: absolute;
  bottom: 0.4rem;
  left: 50%;
  transform: translateX(-50%);
  @media ${({ theme }) => theme.devices.mobile} {
    gap: 0.2rem;
    svg {
      width: 1.2rem;
      height: 1.2rem;
    }
  }
`;

export default PopularSlider;
