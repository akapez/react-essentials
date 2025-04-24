import { Link, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import { lazy, Suspense } from "react";
import LazyLoader from "./components/lazy-loader";

const Home = lazy(() => import('./components/home'));
const Contact = lazy(() => import('./components/contact'));
const About = lazy(() => import('./components/about'));

const AppContainer = styled.div`
  margin: 0 auto;
  max-width: 6xl;
  text-align: center;
  margin-top: 8rem;
`;

const Heading = styled.h1`
  font-weight: 600;
  font-size: 2xl;
`;
const NavContainer = styled.div`
  margin-top: 8rem;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
`;

function App() {

  return (
    <AppContainer>
      <Heading>Advance React</Heading>
      <NavContainer>
        <Nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </Nav>
      </NavContainer>
      <Suspense fallback={<LazyLoader show delay={500} />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </AppContainer>
  );
}

export default App;
