import React, { useEffect } from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

import { getMovie, getPersons, getPosters, getReviews } from '@lib/api/movie';

import DetailImgSlider from '@components/common/DetailImgSlider';
import MovieInfo from '@components/detail/MovieInfo';
import PersonSlider from '@components/detail/PersonSlider';
import PosterSlider from '@components/detail/PosterSlider';
import Review from '@components/detail/Review';
import SeasonSlider from '@components/detail/SeasonSlider';

const DetailContainer = () => {
  const location = useLocation();
  const locationType = location.pathname.split('/')[2];
  const locationId = location.pathname.split('/').pop();

  const [movie, setMovie] = useState();
  const [cast, setCast] = useState();
  const [crew, setCrew] = useState();
  const [posters, setPosters] = useState();
  const [reviews, setReviews] = useState();

  useEffect(() => {
    const getMovieAxios = async (type, movieId) => {
      const result = await getMovie(locationType, locationId);
      setMovie(result);
    };
    getMovieAxios();
  }, []);

  useEffect(() => {
    const getPersonsAxios = async (type, movieId) => {
      const result = await getPersons(locationType, locationId);
      setCast(result.cast);
      setCrew(result.crew);
    };
    getPersonsAxios();
  }, []);

  useEffect(() => {
    const getPostersAxios = async (type, movieId) => {
      const result = await getPosters(locationType, locationId);
      setPosters(result.posters);
    };
    getPostersAxios();
  }, []);

  useEffect(() => {
    const getReviewsAxios = async (type, movieId) => {
      const result = await getReviews(locationType, locationId);
      setReviews(result.results);
    };
    getReviewsAxios();
  }, []);

  if (!movie) return null;
  if (!cast) return null;
  if (!posters) return null;
  if (!reviews) return null;

  return (
    <Container>
      <MovieInfo movie={movie} locationType={locationType} />
      {cast.length !== 0 && <PersonSlider persons={cast} title="출연진" />}
      {crew.length !== 0 && <PersonSlider persons={crew} title="제작진" />}
      {/* <SeasonSlider /> */}
      <DetailImgSlider name="시즌" contents={movie.seasons} />
      <PosterSlider posters={posters} />
      {reviews.length !== 0 && <Review reviews={reviews} />}
    </Container>
  );
};
const Container = styled.div`
  padding-top: 10rem;
  @media ${({ theme }) => theme.devices.tablet} {
    padding-top: 8rem;
  }
  @media ${({ theme }) => theme.devices.mobile} {
    padding-top: 6rem;
  }
`;

export default DetailContainer;
