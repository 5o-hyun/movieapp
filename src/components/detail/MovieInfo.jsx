import React from 'react';
import { useState } from 'react';
import { AiOutlineClockCircle, AiOutlineLineChart } from 'react-icons/ai';
import { RiMovie2Line } from 'react-icons/ri';
import { TbPhotoCancel } from 'react-icons/tb';
import styled from 'styled-components';

import Keyword from '@components/common/Keyword';
import Star from '@components/common/Star';

const MovieInfo = ({ movie, locationType }) => {
  const [isOpenOverview, setIsOpenOverview] = useState(false);
  const onOverviewHandler = () => {
    setIsOpenOverview((isOpenOverview) => !isOpenOverview);
  };
  return (
    <Container>
      <div className="movieInfoWrapper">
        <div className="infoImgBox">
          {movie.poster_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt="영화이미지"
            />
          ) : (
            <TbPhotoCancel />
          )}
        </div>
        <div className="infoBox">
          <p className="infoTitle">
            {locationType === 'movie' && <>{movie.title}</>}
            {locationType === 'tv' && <>{movie.name}</>}
          </p>
          <p className="tagline">{movie.tagline}</p>
          <p className="originalTitle">
            {locationType === 'movie' && <>{movie.original_title}</>}
            {locationType === 'tv' && <>{movie.original_name}</>}
          </p>
          <StyledStar point={movie.vote_average} />
          <StyledKeyword keywords={movie.genres} />
          <ul className="infoDetailBox">
            <li className="infoDetail">
              <AiOutlineLineChart />
              <p>평점 : {movie.vote_average} / 10</p>
            </li>
            <li className="infoDetail">
              <RiMovie2Line />
              {locationType === 'movie' && <p>개봉 : {movie.release_date}</p>}
              {locationType === 'tv' && (
                <p>
                  {movie.first_air_date} ~ {movie.last_air_date}
                </p>
              )}
            </li>
            <li className="infoDetail">
              <AiOutlineClockCircle />
              {locationType === 'movie' && <p>시간 : {movie.runtime} 분</p>}
              {locationType === 'tv' && (
                <p>
                  시즌 : {movie.number_of_seasons}개 - 에피소드 :{' '}
                  {movie.number_of_episodes}개
                </p>
              )}
            </li>
            {locationType === 'tv' && movie.homepage && (
              <li className="infoDetail">
                <AiOutlineClockCircle />
                <p style={{ textDecoration: 'underline' }}>
                  <a
                    href={`${movie.homepage}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {movie.homepage}
                  </a>
                </p>
              </li>
            )}
          </ul>
          {movie.overview && (
            <div className="infoOverviewWrapper">
              <p
                className={
                  isOpenOverview === true ? 'infoOverview add' : 'infoOverview'
                }
              >
                {movie.overview}
              </p>
              {movie.overview.length > 150 && (
                <button
                  className="overviewBtn"
                  onClick={() => onOverviewHandler()}
                >
                  {isOpenOverview === true ? '접기' : '더보기'}
                </button>
              )}
            </div>
          )}
        </div>
      </div>
      {movie.overview && (
        <div className="infoOverviewWrapperBottom">
          <p
            className={
              isOpenOverview === true ? 'infoOverview add' : 'infoOverview'
            }
          >
            {movie.overview}
          </p>
          {movie.overview.length > 150 && (
            <button className="overviewBtn" onClick={() => onOverviewHandler()}>
              {isOpenOverview === true ? '접기' : '더보기'}
            </button>
          )}
        </div>
      )}
    </Container>
  );
};
const Container = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.base};
  .movieInfoWrapper {
    width: 1024px;
    margin: 0 auto;
    display: flex;
    gap: ${({ theme }) => theme.spacing.bigLarge};
    @media ${({ theme }) => theme.devices.tablet} {
      width: auto;
      gap: ${({ theme }) => theme.spacing.medium};
    }
    @media ${({ theme }) => theme.devices.mobile} {
      flex-direction: column;
    }
    .infoImgBox {
      width: 38rem;
      height: 57rem;
      border: 1px solid ${({ theme }) => theme.colors.gray[800]};
      display: flex;
      align-items: center;
      justify-content: center;
      @media ${({ theme }) => theme.devices.tablet} {
        width: 30rem;
      }
      @media ${({ theme }) => theme.devices.mobile} {
        width: auto;
        max-width: 45rem;
        align-self: center;
        border: 0;
      }
      svg {
        width: 30%;
        height: 30%;
      }
    }
    .infoBox {
      flex: 1;
      .infoTitle {
        font-size: 3.4rem;
        margin-bottom: ${({ theme }) => theme.spacing.base};
        color: ${({ theme }) => theme.colors.white};
        @media ${({ theme }) => theme.devices.tablet} {
          font-size: 2.8rem;
        }
        @media ${({ theme }) => theme.devices.mobile} {
          font-size: 2.4rem;
        }
      }
      .tagline {
        font-size: 2.4rem;
        margin-bottom: ${({ theme }) => theme.spacing.base};
        @media ${({ theme }) => theme.devices.tablet} {
          font-size: 2rem;
          margin-bottom: ${({ theme }) => theme.spacing.smallMedium};
        }
        @media ${({ theme }) => theme.devices.mobile} {
          font-size: 1.4rem;
          margin-bottom: ${({ theme }) => theme.spacing.small};
        }
      }
      .originalTitle {
        font-size: 1.8rem;
        margin-bottom: ${({ theme }) => theme.spacing.base};
        @media ${({ theme }) => theme.devices.tablet} {
          font-size: 1.6rem;
          margin-bottom: ${({ theme }) => theme.spacing.smallMedium};
        }
        @media ${({ theme }) => theme.devices.mobile} {
          font-size: 1.2rem;
          margin-bottom: ${({ theme }) => theme.spacing.tiny};
        }
      }
      ul.infoDetailBox {
        display: flex;
        flex-direction: column;
        gap: ${({ theme }) => theme.spacing.small};
        margin-bottom: ${({ theme }) => theme.spacing.base};
        @media ${({ theme }) => theme.devices.mobile} {
          gap: ${({ theme }) => theme.spacing.tiny};
          margin-bottom: ${({ theme }) => theme.spacing.tiny};
        }
        li.infoDetail {
          font-size: 1.6rem;
          display: flex;
          align-items: center;
          gap: ${({ theme }) => theme.spacing.microTiny};
          @media ${({ theme }) => theme.devices.mobile} {
            font-size: 1.2rem;
          }
          svg {
            width: 2rem;
            height: 2rem;
            @media ${({ theme }) => theme.devices.mobile} {
              width: 1.6rem;
              height: 1.6rem;
            }
          }
        }
      }
      .infoOverviewWrapper {
        @media ${({ theme }) => theme.devices.mobile} {
          display: none;
        }
        p.infoOverview {
          font-size: 1.6rem;
          line-height: 1.6;
          margin-bottom: ${({ theme }) => theme.spacing.tiny};
          width: 100%;
          display: -webkit-box;
          overflow: hidden;
          text-overflow: ellipsis;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
          @media ${({ theme }) => theme.devices.mobile} {
            font-size: 1.2rem;
          }
          &.add {
            display: initial;
          }
        }
        .overviewBtn {
          width: 100%;
          height: 2.8rem;
          background-color: ${({ theme }) => theme.colors.gray[700]};
          font-size: 1.2rem;
          color: ${({ theme }) => theme.colors.white};
          border-radius: 1rem;
          @media ${({ theme }) => theme.devices.mobile} {
            height: 2.4rem;
            font-size: 1rem;
          }
        }
      }
    }
  }
  .infoOverviewWrapperBottom {
    display: none;
    @media ${({ theme }) => theme.devices.mobile} {
      display: block;
    }
    p.infoOverview {
      font-size: 1.6rem;
      line-height: 1.6;
      margin-bottom: ${({ theme }) => theme.spacing.tiny};
      width: 100%;
      display: -webkit-box;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      @media ${({ theme }) => theme.devices.mobile} {
        font-size: 1.2rem;
      }
      &.add {
        display: initial;
      }
    }
    .overviewBtn {
      width: 100%;
      height: 2.8rem;
      background-color: ${({ theme }) => theme.colors.gray[700]};
      font-size: 1.2rem;
      color: ${({ theme }) => theme.colors.white};
      border-radius: 1rem;
      @media ${({ theme }) => theme.devices.mobile} {
        height: 2.4rem;
        font-size: 1rem;
      }
    }
  }
`;
const StyledStar = styled(Star)`
  margin-bottom: ${({ theme }) => theme.spacing.small};
  svg {
    width: 3rem;
    height: 3rem;
    @media ${({ theme }) => theme.devices.mobile} {
      width: 1.8rem;
      height: 1.8rem;
    }
  }
`;
const StyledKeyword = styled(Keyword)`
  margin-bottom: ${({ theme }) => theme.spacing.base};
  @media ${({ theme }) => theme.devices.mobile} {
    margin-bottom: ${({ theme }) => theme.spacing.small};
  }
`;

export default MovieInfo;
