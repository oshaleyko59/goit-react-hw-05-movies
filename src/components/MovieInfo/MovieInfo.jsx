import PropTypes from 'prop-types';

const MovieInfo = ({ movie }) => {
  const { overview, title, genres, vote_average, poster_path } = movie;
  const imgUrl = `https://image.tmdb.org/t/p/w342${poster_path}`;

  return (
    <div>
      <div>
        {poster_path ? (
          <img src={imgUrl} alt="film poster" />
        ) : (
          <div>No poster</div>
        )}
      </div>
      <div>
        <h2>{title}</h2>
        <p>User score: {Math.round(vote_average * 10)}%</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <p>{genres.map(genre => genre.name).join(' ')}</p>
      </div>
    </div>
  );
};

MovieInfo.propTypes = {
  movie: PropTypes.shape({
    overview: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string }))
      .isRequired,
    vote_average: PropTypes.number.isRequired,
    poster_path: PropTypes.string,
  }),
};

export default MovieInfo;
