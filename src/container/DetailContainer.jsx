import React, { useEffect } from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

import { getMovie, getPersons, getPosters, getReviews } from '@lib/api/movie';

import MovieInfo from '@components/detail/MovieInfo';
import PersonSlider from '@components/detail/PersonSlider';
import PosterSlider from '@components/detail/PosterSlider';
import Review from '@components/detail/Review';

const DetailContainer = () => {
  const location = useLocation();
  const locationMovieId = location.pathname.split('/').pop();

  const [movie, setMovie] = useState();
  const [cast, setCast] = useState();
  const [crew, setCrew] = useState();
  const [posters, setPosters] = useState();
  const [reviews, setReviews] = useState();

  useEffect(() => {
    const getMovieAxios = async (movieId) => {
      const result = await getMovie(locationMovieId);
      setMovie(result);
    };
    getMovieAxios();
  }, []);

  useEffect(() => {
    const getPersonsAxios = async (movieId) => {
      const result = await getPersons(locationMovieId);
      setCast(result.cast);
      setCrew(result.crew);
    };
    getPersonsAxios();
  }, []);

  useEffect(() => {
    const getPostersAxios = async (movieId) => {
      const result = await getPosters(locationMovieId);
      setPosters(result.posters);
    };
    getPostersAxios();
  }, []);

  useEffect(() => {
    const getReviewsAxios = async (movieId) => {
      const result = await getReviews(locationMovieId);
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
      <MovieInfo movie={movie} />
      <PersonSlider persons={cast} title="출연진" />
      <PersonSlider persons={crew} title="제작진" />
      <PosterSlider posters={posters} />
      <Review reviews={reviews} />
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
