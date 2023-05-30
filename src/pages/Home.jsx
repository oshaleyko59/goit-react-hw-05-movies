import React, { useEffect, useState, useCallback } from 'react';
import api from 'service/fetchTheMovieDb';
import MovieList from 'components/moviesList/MoviesList';
import Error from 'components/Error/Error';
import Loading from 'components/Loading/Loading';
import { STATUS } from 'common/constants';

const Home = () => {
  const [status, setStatus] = useState(STATUS.IDLE);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  const fetchData = useCallback(() => {
      setStatus(STATUS.PENDING);
      api
        .fetchTrendingMovies()
        .then(({ results }) => {
          setMovies(results);
          setStatus(STATUS.RESOLVED);
        })
        .catch(error => {
          setError(error);
          setStatus(STATUS.REJECTED);
          setMovies([]);
        });
  }, []);

  useEffect(() => {
    fetchData();
    return () => {
      api.abortFetch();
    };
  }, [fetchData]);

  return (
    <div>
      <h1>Trending today</h1>
      {status === STATUS.REJECTED && <Error msg={error.message} />}
      {status === STATUS.RESOLVED && <MovieList home={true} movies={movies} />}
      {status === STATUS.PENDING && <Loading />}
    </div>
  );
};

export default Home;
