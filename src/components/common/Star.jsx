import React, { useEffect, useState } from 'react';
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
import styled from 'styled-components';

const Star = ({ point, ...props }) => {
  const [movieStars, setMovieStars] = useState();
  const basicStars = [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5];

  const starHandler = () => {
    let star = 0;
    let moviePointReset = (point / 2).toFixed(1);
    basicStars
      .reverse()
      .forEach((basicStar) =>
        moviePointReset <= basicStar ? (star = basicStar) : null
      );
    setMovieStars(star);
  };

  useEffect(() => {
    starHandler();
  }, [movieStars]);

  return (
    <Container {...props}>
      <span className="blind">영화평점</span>
      {movieStars === 0 && (
        <>
          <BsStar />
          <BsStar />
          <BsStar />
          <BsStar />
          <BsStar />
        </>
      )}
      {movieStars === 0.5 && (
        <>
          <BsStarHalf />
          <BsStar />
          <BsStar />
          <BsStar />
          <BsStar />
        </>
      )}
      {movieStars === 1 && (
        <>
          <BsStarFill />
          <BsStar />
          <BsStar />
          <BsStar />
          <BsStar />
        </>
      )}
      {movieStars === 1.5 && (
        <>
          <BsStarFill />
          <BsStarHalf />
          <BsStar />
          <BsStar />
          <BsStar />
        </>
      )}
      {movieStars === 2 && (
        <>
          <BsStarFill />
          <BsStarFill />
          <BsStar />
          <BsStar />
          <BsStar />
        </>
      )}
      {movieStars === 2.5 && (
        <>
          <BsStarFill />
          <BsStarFill />
          <BsStarHalf />
          <BsStar />
          <BsStar />
        </>
      )}
      {movieStars === 3 && (
        <>
          <BsStarFill />
          <BsStarFill />
          <BsStarHalf />
          <BsStar />
          <BsStar />
        </>
      )}
      {movieStars === 3.5 && (
        <>
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarHalf />
          <BsStar />
        </>
      )}
      {movieStars === 4 && (
        <>
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStar />
        </>
      )}
      {movieStars === 4.5 && (
        <>
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarHalf />
        </>
      )}
      {movieStars === 5 && (
        <>
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
        </>
      )}
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  gap: 0.8rem;
  @media ${({ theme }) => theme.devices.mobile} {
    gap: 0.6rem;
  }
  svg {
    width: 2rem;
    height: 2rem;
    color: ${({ theme }) => theme.colors.subColor};
    @media ${({ theme }) => theme.devices.mobile} {
      width: 1.6rem;
      height: 1.6rem;
    }
  }
`;

export default Star;
