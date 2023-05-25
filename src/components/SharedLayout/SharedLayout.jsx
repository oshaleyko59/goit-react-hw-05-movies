//import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Container, StyledNavLink } from './styled';

const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/movies">Movies</StyledNavLink>
        </nav>
      </Header>
      <Outlet />
    </Container>
  );
};

export default SharedLayout;
/*
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>  */
