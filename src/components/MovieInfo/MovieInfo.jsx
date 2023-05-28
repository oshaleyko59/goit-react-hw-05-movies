import PropTypes from 'prop-types';

const MovieInfo = ({ movie }) => {
  const { overview, title, genres, vote_average, poster_path } = movie;
  const imgUrl = `https://image.tmdb.org/t/p/w342${poster_path}`;

  const handleGoBack = () => {
    console.log('TODO: arrow go back');
  };

  return (
    <div>
      <button type="button" onClick={handleGoBack}>
        {'<- Go back'}
      </button>
      <div>
        <img src={imgUrl} alt="film poster" />
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

//TODO: all except id may ne missing
MovieInfo.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    overview: PropTypes.string,
    title: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string })),
    vote_average: PropTypes.number,
    poster_path: PropTypes.string,
  }),
};

export default MovieInfo;
