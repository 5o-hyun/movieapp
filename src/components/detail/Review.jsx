import React from 'react';
import styled from 'styled-components';

const Review = () => {
  return (
    <Container>
      <p className="title">리뷰</p>
      <ul className="reviewContainer">
        <li className="reviewWrapper">
          <div className="reviewPersonImg"></div>
          <div className="reviewContents">
            <p className="reviewPersonName">name</p>
            <p className="reviewPersonDesc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo odio
              harum fuga quis numquam possimus alias vel! Velit laborum fuga
              illum, culpa temporibus, ex ut recusandae quaerat animi quisquam
              nulla.
            </p>
          </div>
        </li>
        <li className="reviewWrapper">
          <div className="reviewPersonImg"></div>
          <div className="reviewContents">
            <p className="reviewPersonName">name</p>
            <p className="reviewPersonDesc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo odio
              harum fuga quis numquam possimus alias vel! Velit laborum fuga
              illum, culpa temporibus, ex ut recusandae quaerat animi quisquam
              nulla.
            </p>
          </div>
        </li>
        <li className="reviewWrapper">
          <div className="reviewPersonImg"></div>
          <div className="reviewContents">
            <p className="reviewPersonName">name</p>
            <p className="reviewPersonDesc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo odio
              harum fuga quis numquam possimus alias vel! Velit laborum fuga
              illum, culpa temporibus, ex ut recusandae quaerat animi quisquam
              nulla.
            </p>
          </div>
        </li>
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
      .reviewPersonImg {
        width: 6rem;
        height: 6rem;
        border-radius: 50%;
        background-color: red;
        @media ${({ theme }) => theme.devices.mobile} {
          width: 4rem;
          height: 4rem;
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
