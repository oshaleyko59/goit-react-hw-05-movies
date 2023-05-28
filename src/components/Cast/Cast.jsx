import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from 'service/fetchTheMovieDb';
import Error from 'components/Error/Error';
import Loading from 'components/Loading/Loading';
import { STATUS } from 'common/constants';

const Cast = () => {
  const { id } = useParams();
  const [status, setStatus] = useState(STATUS.IDLE);
  const [cast, setCast] = useState([]);
  //for fetch error
  const [error, setError] = useState(null);

  useEffect(() => {
    setStatus(STATUS.PENDING);
    api
      .fetchMovieCast(id)
      .then(({ cast }) => {
        setCast(cast);
        setStatus(STATUS.RESOLVED);
      })
      .catch(error => {
        setError(error);
        setStatus(STATUS.REJECTED);
        setCast([]);
      });

    return () => {
      console.log('Unmounting phase, aborting...');
      api.abortFetch();
    };
  }, [id]);

  return (
    <div>
      {status === STATUS.REJECTED && <Error msg={error.message} />}
      {status === STATUS.PENDING && <Loading />}
      {status === STATUS.RESOLVED && (
        <ul>
          {cast.map(({ id, character, name, profile_path }) => {
            const imgUrl = `https://image.tmdb.org/t/p/w92${profile_path}`;
            return (
              <li key={id}>
                <img src={imgUrl} alt={name} />
                <p>{name}</p>
                <p>Character: {character}</p>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
// {status !== status.RESOLVED && <MovieList movies={movies} />}
export default Cast;
