import { useParams, Outlet, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
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
      //console.log('Unmounting phase, aborting...');
      api.abortFetch();
    };
  }, [id]);

  return (
    <div>
      {status === STATUS.REJECTED && <Error msg={error.message} />}
      {status === STATUS.PENDING && <Loading />}
      {status === STATUS.RESOLVED && (
        <div>
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
      <Outlet />
    </div>
  );
};

export default MovieDetails;
