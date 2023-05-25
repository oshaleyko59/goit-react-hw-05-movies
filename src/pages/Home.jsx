import React, { useEffect, useState } from 'react';
import api from 'service/fetchTheMovieDb';
import MovieList from 'components/moviesList/MoviesList';
import styled from 'styled-components';

export const Err = styled.p`
  margin-top: 38px;
  margin-left: auto;
  margin-right: auto;
  color: red;
  font-size: 24px;
  font-weight: 700;
`;

const STATUS = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export const Home = () => {
  //to use for render
  const [status, setStatus] = useState(STATUS.IDLE);
  const [movies, setMovies] = useState([]);
  //for fetch error
  const [error, setError] = useState(null);

  useEffect(() => {
    setStatus(STATUS.PENDING);
    api.fetchTrendingMovies().then(({results}) => {
      setMovies(results);
      console.log(results);
      setStatus(STATUS.RESOLVED);
    }).catch(error => {
      setError(error);
      setStatus(STATUS.REJECTED);
      setMovies([]);
  })
  }, []);
/*   if (status === STATUS.RESOLVED) {
    movies.map(({ title, id }) => {
      console.log(title);
    });
    console.log('status', status, status !== status.RESOLVED);
} */
  return (
    <main>
      <h1>Trending today</h1>
      {status === STATUS.REJECTED && <Err>{error.message}</Err>}
      {status !== status.RESOLVED && <MovieList movies={movies} />}
      {status === STATUS.PENDING && <div>Loading... TODO:</div>}
    </main>
  );
};
/*           {movies.map(({ title, id }) => {
            return (
              <li key={id}>
                <span>{title}</span>
              </li>
            );
          })} */
