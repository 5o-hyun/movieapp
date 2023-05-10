import React from 'react';
import { TbPhotoX } from 'react-icons/tb';
import styled from 'styled-components';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

const DetailImgSlider = ({ name, contents }) => {
  return (
    <Container>
      <p className="title">
        {name} ({contents.length})
      </p>
      <Swiper
        slidesPerView={5.5}
        spaceBetween={20}
        breakpoints={{
          1024: { slidesPerView: 5.5, spaceBetween: 20 },
          320: { slidesPerView: 4.5, spaceBetween: 10 },
        }}
        className="detailImgSliderSwiper"
      >
        {contents.map((content) => (
          <SwiperSlide key={content.id}>
            <div className="imgBox">
              {content.poster_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w500` + content.poster_path}
                  alt={content.name}
                />
              ) : (
                <TbPhotoX />
              )}
            </div>
            <p>[{content.name}]</p>
            <p>{content.air_date}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
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
  .detailImgSliderSwiper {
    width: 100%;
    display: flex;
    .swiper-slide {
      .imgBox {
        width: 100%;
        aspect-ratio: 1 / 1.444140625;
        border: 1px solid ${({ theme }) => theme.colors.gray[800]};
        display: flex;
        justify-content: center;
        align-items: center;
        @media ${({ theme }) => theme.devices.tablet} {
          aspect-ratio: 1 / 1.4;
        }
        svg {
          width: 3rem;
          height: 3rem;
        }
      }
      p {
        font-size: 1.4rem;
        @media ${({ theme }) => theme.devices.tablet} {
          font-size: 1.2rem;
        }
      }
    }
  }
`;

export default DetailImgSlider;
