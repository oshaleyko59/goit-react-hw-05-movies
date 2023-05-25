//import styled from 'styled-components';
import PropTypes from 'prop-types';

const MovieList = ({movies}) => {
console.log('', typeof movies, movies);
  return (
    <ul>
      {movies.map(({ title, id }) => {
        return (
          <li key={id}>
            <span>{title}</span>
          </li>
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
  }))
}

