import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//location TODO: state={{from:{location}}}
const MovieList = ({ movies }) => {
  
  return (
    <ul>
      {movies.map(({ title, id }) => {
        return (
          <Link key={id} to={`${id}`} >
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
//TODO:  location: PropTypes.shape
}

