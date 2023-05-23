import { Route, Routes, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Home } from 'pages/Home';
import { Movies } from 'pages/Movies';
import { NotFound } from 'pages/NotFound';
import { SharedLayout } from './SharedLayout';

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="*" element={<NotFound />} />
      </Route></Routes>
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
