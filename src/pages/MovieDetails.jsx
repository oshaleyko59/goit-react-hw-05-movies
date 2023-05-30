import { useParams, useLocation, Outlet } from 'react-router-dom';
import { useEffect, useState, useRef, Suspense } from 'react';
import MovieInfo from 'components/MovieInfo/MovieInfo';
import Error from 'components/Error/Error';
import Loading from 'components/Loading/Loading';
import Additional from 'components/Additional/Additional';
import api from 'service/fetchTheMovieDb';
import { STATUS } from 'common/constants';
import { FlexColumn, GoBack } from 'common/styled';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  const [status, setStatus] = useState(STATUS.IDLE);
  const { id } = useParams();

  const location = useLocation();
  const backLocation = useRef(location.state?.from ?? '/');

  useEffect(() => {
    setStatus(STATUS.PENDING);
    api
      .fetchMovieDetails(id)
      .then(data => {
        setMovie(data);
        setStatus(STATUS.RESOLVED);
      })
      .catch(error => {
        setError(error);
        setStatus(STATUS.REJECTED);
        setMovie(null);
      });

    return () => {
      api.abortFetch();
    };
  }, [id]);

  return (
    <div>
      {status === STATUS.REJECTED && <Error msg={error.message} />}
      {status === STATUS.PENDING && <Loading />}
      {status === STATUS.RESOLVED && (
        <>
          <FlexColumn>
            <GoBack to={backLocation.current}>{'\u2190'} Go back</GoBack>
            <MovieInfo movie={movie} />
          </FlexColumn>
          <Additional />
        </>
      )}
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
