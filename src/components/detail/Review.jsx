import React from 'react';
import { BsPersonFillSlash } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Review = ({ reviews }) => {
  return (
    <Container>
      <p className="title">리뷰</p>
      <ul className="reviewContainer">
        {reviews.map((review) => (
          <Link to={review.url} key={review.id} target="_blank">
            <li key={review.id} className="reviewWrapper">
              <div className="reviewPersonImg">
                {review.author_details.avatar_path ? (
                  <img
                    src={
                      `https://image.tmdb.org/t/p/w500` +
                      review.author_details.avatar_path
                    }
                    alt="사람이미지"
                  />
                ) : (
                  <BsPersonFillSlash />
                )}
              </div>
              <div className="reviewContents">
                <p className="reviewPersonName">{review.author}</p>
                <p className="reviewPersonDesc">{review.content}</p>
              </div>
            </li>
          </Link>
        ))}
      </ul>
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
  ul.reviewContainer {
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.base};
    li.reviewWrapper {
      display: flex;
      gap: ${({ theme }) => theme.spacing.smallMedium};
      cursor: pointer;
      .reviewPersonImg {
        width: 6rem;
        height: 6rem;
        border-radius: 50%;
        border: 1px solid ${({ theme }) => theme.colors.gray[800]};
        display: flex;
        align-items: center;
        justify-content: center;
        @media ${({ theme }) => theme.devices.mobile} {
          width: 4rem;
          height: 4rem;
        }
        img {
          border-radius: 50%;
          min-width: 40px;
        }
        svg {
          width: 60%;
          height: 60%;
          color: ${({ theme }) => theme.colors.color};
          min-width: 40px;
        }
      }
      .reviewContents {
        flex: 1;
        p.reviewPersonName {
          font-size: 1.6rem;
          font-weight: bold;
          color: ${({ theme }) => theme.colors.color};
          margin-bottom: ${({ theme }) => theme.spacing.small};
        }
        p.reviewPersonDesc {
          font-size: 1.4rem;
          color: ${({ theme }) => theme.colors.color};
          width: 100%;
          display: -webkit-box;
          overflow: hidden;
          text-overflow: ellipsis;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
        }
      }
    }
  }
`;

export default Review;
