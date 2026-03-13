import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Container, Header, Link } from "./Layout.styled"

const Layout = () => {

  return (
    <Container>
      <Header>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/stuff">Stuff</Link>
          <Link to ="/tasks">Tasks</Link>
        </nav>
      </Header>
      <Suspense fallback={<div>LOADING...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default Layout;