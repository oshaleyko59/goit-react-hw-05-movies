import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { StyledLink } from 'common/styled';

const MovieList = ({ movies, home = false }) => {
  const location = useLocation();

  return (
    <ul>
      {movies.map(({ title, id }) => {
        return (
          <li key={id}>
            <StyledLink
              to={home ? `movies/${id}` : `${id}`}
              state={{ from: location }}
            >
              {title}
              <br />
            </StyledLink>
          </li>
        );
      })}
    </ul>
  );
};

export default MovieList;

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
  home: PropTypes.bool,
};
