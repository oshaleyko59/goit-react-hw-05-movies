import { Route, Routes } from 'react-router-dom';
import Home  from 'pages/Home';
import Movies  from 'pages/Movies';
import MovieDetails from 'pages/MovieDetails';
import NotFound  from 'pages/NotFound';
import SharedLayout from './SharedLayout/SharedLayout';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />}/>
          <Route path="/movies/:id" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="/:id" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};

/*   return (
    <div>
      <nav>
        <StyledLink to="/" end>
          Home
        </StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
      </nav>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  ); */
