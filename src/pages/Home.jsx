import React, { useEffect, useState, useMemo } from 'react';
import api from 'service/fetchTheMovieDb';
import MovieList from 'components/moviesList/MoviesList';
import Error from 'components/Error/Error';
import Loading from 'components/Loading/Loading';
import { STATUS } from 'common/constants';

const Home = () => {
  //to use for render
  const [status, setStatus] = useState(STATUS.IDLE);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  const fetchData = useMemo(() => {
    //console.log('useMemo called', status);
    return () => {
     // console.log('fetchData called', status);
      if (status !== STATUS.IDLE) return;

      setStatus(STATUS.PENDING);
      //console.log('FETCHING...');
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
    };
  }, [status]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

    useEffect(() => {
     // console.log('Mounted...');
      return () => {
        //   console.log('Unmounting...');
        api.abortFetch();
      };
    }, []);

  return (
    <div>
      <h1>Trending today</h1>
      {status === STATUS.REJECTED && <Error msg={error.message} />}
      {status === STATUS.RESOLVED && <MovieList movies={movies} />}
      {status === STATUS.PENDING && <Loading />}
    </div>
  );
};

/* const Home1 = () => {
  //TODO: remove
  //to use for render
  const [status, setStatus] = useState(STATUS.IDLE);
  const [movies, setMovies] = useState([]);
  //for fetch error
  const [error, setError] = useState(null);

  useEffect(() => {
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

  return (
    <div>
      <h1>Trending today</h1>
      {status === STATUS.REJECTED && <Error msg={error.message} />}
      {status === STATUS.RESOLVED && <MovieList movies={movies} />}
      {status === STATUS.PENDING && <Loading />}
    </div>
  );
}; */
export default Home;
