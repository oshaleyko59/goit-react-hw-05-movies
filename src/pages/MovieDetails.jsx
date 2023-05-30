import { useParams, useLocation, Outlet, Link } from 'react-router-dom';
import { useEffect, useState, useRef, Suspense } from 'react';
import MovieInfo from 'components/MovieInfo/MovieInfo';
import Error from 'components/Error/Error';
import Loading from 'components/Loading/Loading';
import api from 'service/fetchTheMovieDb';
import { STATUS } from 'common/constants';

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
        <div>
          <Link to={backLocation.current}>Go back</Link>
          <MovieInfo movie={movie} />
          <h4>Additional information</h4>
          <ul>
            <li>
              <Link to="cast">Cast</Link>
            </li>
            <li>
              <Link to="reviews">Reviews</Link>
            </li>
          </ul>
        </div>
      )}
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;


//          {location.state && <Link to={location.state.from}>Go back</Link>}
