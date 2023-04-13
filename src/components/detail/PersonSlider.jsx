import React from 'react';
import { BsPersonFillSlash } from 'react-icons/bs';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';

const PersonSlider = ({ persons, title }) => {
  console.log(persons);
  return (
    <Container>
      <p className="title">
        {title} ({persons.length})
      </p>
      <Swiper
        className="gallerySlider"
        slidesPerView="auto"
        spaceBetween={30}
        breakpoints={{
          1024: { spaceBetween: 20 },
          320: { spaceBetween: 10 },
        }}
      >
        {persons.map((person) => (
          <SwiperSlide key={person.id}>
            <div className="pic">
              {person.profile_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w500` + person.profile_path}
                  alt="사람이미지"
                />
              ) : (
                <BsPersonFillSlash />
              )}
            </div>
            <p className="name">{person.name}</p>
            <p className="department">{person.known_for_department}</p>
          </SwiperSlide>
        ))}
        <SwiperSlide>
          <div className="pic"></div>
          <p className="name">네임네임네임네임</p>
          <p className="department">department</p>
        </SwiperSlide>
        <SwiperSlide>
          <div className="pic"></div>
          <p className="name">네임네임네임네임</p>
          <p className="department">department</p>
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};
const Container = styled.div`
  width: 1024px;
  margin: 0 auto;
  margin-bottom: ${({ theme }) => theme.spacing.base};
  @media ${({ theme }) => theme.devices.mobile} {
    margin-bottom: ${({ theme }) => theme.spacing.smallMedium};
  }
  .title {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.white};
    margin-bottom: ${({ theme }) => theme.spacing.base};
  }
  .gallerySlider {
    display: flex;
    gap: 0.6rem;
    .swiper-slide {
      width: fit-content;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.8rem;
      @media ${({ theme }) => theme.devices.mobile} {
        width: 6rem;
        gap: 0.4rem;
      }
      .pic {
        width: 5rem;
        height: 5rem;
        border: 1px solid ${({ theme }) => theme.colors.gray[800]};
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          border-radius: 50%;
        }
        svg {
          width: 4rem;
          height: 4rem;
        }
      }
      .name,
      .department {
        font-size: 1.2rem;
        @media ${({ theme }) => theme.devices.mobile} {
          display: -webkit-box;
          overflow: hidden;
          text-overflow: ellipsis;
          word-break: break-all;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 1;
          height: 1.4rem;
        }
      }
    }
  }
`;

export default PersonSlider;
