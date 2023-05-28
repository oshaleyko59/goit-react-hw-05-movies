import React, { useEffect, useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom'; //, useLocation
import api from 'service/fetchTheMovieDb';
import MovieList from 'components/moviesList/MoviesList';
import Error from 'components/Error/Error';
import Loading from 'components/Loading/Loading';
import { STATUS } from 'common/constants';

const Movies = () => {
  // const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  //to use for render //TODO: same as Home
  const [status, setStatus] = useState(STATUS.IDLE);
  const [movies, setMovies] = useState([]);
  //for fetch error
  const [error, setError] = useState(null);

  const handleSearchChange = e => {
    const query = e.target.value;
    if (query === '') {
      return setSearchParams({});
    }

    setSearchParams({ query });
  };

  const fetchData = useMemo(
    () => {
      console.log('useMemo called', status);
      return (() => {
      console.log('fetchData called', status);
      if (status !== STATUS.IDLE || query === '') return;

      setStatus(STATUS.PENDING);
      console.log('fetching movies...');
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
    })},
    [query, status]
  );

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    console.log('Mounted...');
        return () => {
          console.log('Unmounting...');
          //api.abortFetch(); <div>{status}</div>
        };
  }, []);

  return (
    <div>
      <input type="text" value={query} onChange={handleSearchChange}></input>
      {status === STATUS.REJECTED && <Error msg={error.message} />}
      {status === STATUS.RESOLVED && <MovieList movies={movies} />}
      {status === STATUS.PENDING && <Loading />}
    </div>
  );
};

export default Movies;



/*       {status === 'resolved' && <MovieList movies={movies} />}
      <div>{status}</div> */


/* useEffect(() => {
  console.log('Mounting phase: same when componentDidMount runs');

  return () => {
    console.log('Unmounting phase: same when componentWillUnmount runs');
  };
}, []); */
