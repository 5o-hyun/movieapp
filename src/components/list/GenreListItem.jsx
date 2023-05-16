import React from 'react';
import { TbPhotoCancel } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Star from '@components/common/Star';

const GenreListItem = ({ contents, genreContentsItem }) => {
  return (
    <Container>
      <Link to={`/list/${contents}/${genreContentsItem.id}`}>
        <div className="picture">
          {genreContentsItem.poster_path ? (
            <img
              src={
                `https://image.tmdb.org/t/p/w500` +
                genreContentsItem.poster_path
              }
              alt="영화포스터"
            />
          ) : (
            <TbPhotoCancel className="icon" />
          )}
          <StyledStar point={genreContentsItem.vote_average} />
        </div>
      </Link>
      <p className="pictureTitle">{genreContentsItem.title}</p>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  a {
    display: block;
    width: 100%;
    height: 100%;
    .picture {
      height: 95%;
      position: relative;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      .icon {
        width: 30%;
        height: 30%;
      }
    }
  }
  .pictureTitle {
    text-align: center;
    font-size: 1.6rem;
    width: 100%;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    @media ${({ theme }) => theme.devices.mobile} {
      font-size: 1.2rem;
    }
  }
`;
const StyledStar = styled(Star)`
  position: absolute;
  bottom: 5%;
  left: 50%;
  transform: translateX(-50%);
  @media ${({ theme }) => theme.devices.mobile} {
    gap: 0.2rem;
    bottom: 3%;
  }
  svg {
    @media ${({ theme }) => theme.devices.tablet} {
      width: 1.4rem;
      height: 1.4rem;
    }
    @media ${({ theme }) => theme.devices.mobile} {
      width: 1.2rem;
      height: 1.2rem;
    }
  }
`;

export default GenreListItem;
