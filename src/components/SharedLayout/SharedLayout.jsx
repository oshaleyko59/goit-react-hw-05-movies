//import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Container, Link } from './styled';

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/" >Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>

        <Outlet />

    </Container>
  );
};
/*
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>  */
