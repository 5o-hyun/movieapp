import React, { useState } from 'react';
import { TbPhotoCancel } from 'react-icons/tb';
import styled from 'styled-components';

import Date from '@components/common/Date';
import Keyword from '@components/common/Keyword';
import Like from '@components/common/Like';
import Star from '@components/common/Star';

const SearchListItem = ({ searchLists }) => {
  return (
    <>
      {searchLists.map((searchList) => (
        <Container key={searchList.id}>
          <div className="top">
            <div className="imgBox">
              {searchList.poster_path ? (
                <img
                  src={
                    `https://image.tmdb.org/t/p/w500` + searchList.poster_path
                  }
                  alt="영화포스터"
                />
              ) : (
                <TbPhotoCancel />
              )}
            </div>
            <div className="contentsMainInfo">
              <p className="title">{searchList.title}</p>
              <p className="desc">{searchList.overview}</p>
            </div>
          </div>
          <div className="bottom">
            <Keyword keywords={searchList.genre_ids} />
            <div className="contentsSubInfo">
              <Star point={searchList.vote_average} />
              <Like count={searchList.vote_count} />
              <Date date={searchList.release_date} />
            </div>
          </div>
        </Container>
      ))}
    </>
  );
};
const Container = styled.div`
  padding: ${({ theme }) => theme.spacing.base} 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  .top {
    display: flex;
    gap: ${({ theme }) => theme.spacing.small};
    margin-bottom: ${({ theme }) => theme.spacing.small};
    .imgBox {
      width: 8rem;
      aspect-ratio: 2 / 3;
      border: 1px solid ${({ theme }) => theme.colors.gray[800]};
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        position: absolute;
      }
      svg {
        width: 40%;
        height: 40%;
      }
    }
    .contentsMainInfo {
      flex: 1;
      p.title {
        font-size: 1.6rem;
        margin-bottom: ${({ theme }) => theme.spacing.small};
      }
      p.desc {
        font-size: 1.4rem;
        opacity: 0.8;
        width: 100%;
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
      }
    }
  }
  .bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .contentsSubInfo {
      display: flex;
      align-items: center;
      gap: ${({ theme }) => theme.spacing.tiny};
    }
  }
`;

export default SearchListItem;
