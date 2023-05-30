import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Container, StyledNavLink } from './styled';
import Loading from 'components/Loading/Loading';

const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/movies">Movies</StyledNavLink>
        </nav>
      </Header>
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default SharedLayout;

