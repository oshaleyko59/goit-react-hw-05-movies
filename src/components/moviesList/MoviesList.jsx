import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

const MovieList = ({ movies, home=false }) => {
  const location = useLocation();

  return (
    <ul>
      {movies.map(({ title, id }) => {
        return (
          <Link
            key={id}
            to={home ? `movies/${id}` : `${id}`}
            state={{ from: location }}
          >
            <div>{title}</div>
          </Link>
        );
      })}
    </ul>
  );
}

export default MovieList;

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
  })),
  home: PropTypes.bool
}

