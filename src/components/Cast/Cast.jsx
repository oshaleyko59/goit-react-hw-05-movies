import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from 'service/fetchTheMovieDb';
import Error from 'components/Error/Error';
import Loading from 'components/Loading/Loading';
import { STATUS } from 'common/constants';
import { FlexRow, FlexColumn } from 'common/styled';

const Cast = () => {
  const { id } = useParams();
  const [status, setStatus] = useState(STATUS.IDLE);
  const [cast, setCast] = useState([]);
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
      api.abortFetch();
    };
  }, [id]);

  return (
    <div>
      {status === STATUS.REJECTED && <Error msg={error.message} />}
      {status === STATUS.PENDING && <Loading />}
      {status === STATUS.RESOLVED &&
        (!cast.length ? (
          <p>Sorry, there is no information about the cast...</p>
        ) : (
          <ul>
            {cast.map(({ id, character, name, profile_path }) => {
              const imgUrl = `https://image.tmdb.org/t/p/w92${profile_path}`;
              return (
                <li key={id}>
                  <FlexRow>
                    {profile_path ? (
                      <img src={imgUrl} alt={name} />
                    ) : (
                      <p>No photo</p>
                    )}
                    <FlexColumn>
                      <p>{name}</p>
                      <p>Character: <b>{character}</b></p>
                    </FlexColumn>
                  </FlexRow>
                </li>
              );
            })}
          </ul>
        ))}
    </div>
  );
};

export default Cast;
