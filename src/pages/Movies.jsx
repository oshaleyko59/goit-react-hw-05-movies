import React, { useEffect, useState, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import api from 'service/fetchTheMovieDb';
import MovieList from 'components/moviesList/MoviesList';
import Error from 'components/Error/Error';
import Loading from 'components/Loading/Loading';
import { STATUS } from 'common/constants';
import DebouncedInput from 'components/DebouncedInput/DebouncedInput';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const [status, setStatus] = useState(STATUS.IDLE);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  const fetchData = useCallback((query) => {
    if (query === '') return;

    setStatus(STATUS.PENDING);
    console.log('fetching movies...', query);
    api
      .fetchSearchMovies(query)
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

  const onChange = query => {
    api.abortFetch();
    setStatus(STATUS.IDLE);

    if (query === '') {
      return setSearchParams({});
    }

    setSearchParams({ query });
    fetchData(query);
  };

  useEffect(() => {
    fetchData(query);
    return () => {
      api.abortFetch();
    };
  }, [fetchData, query]);

  return (
    <div>
      <DebouncedInput value={query} debouncedFunc={onChange}></DebouncedInput>
      {status === STATUS.REJECTED && <Error msg={error.message} />}
      {status === STATUS.RESOLVED &&
        (!movies.length ? (
          <p>Nothing found for your search...</p>
        ) : (
          <MovieList movies={movies} />
        ))}
      {status === STATUS.PENDING && <Loading />}
    </div>
  );
};

export default Movies;
