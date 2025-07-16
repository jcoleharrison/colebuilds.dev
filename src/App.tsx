import { Container } from '@mui/material';
import { Suspense, lazy } from 'react';

const Header = lazy(() => import('./components/header'));
const FeaturedBuilds = lazy(() => import('./components/featured-builds'));
const SearchableTimeline = lazy(() => import('./components/searchable-timeline'));
const Footer = lazy(() => import('./components/footer'));

function App() {
  return (
    <Container id="main-content" role="main" style={{ maxWidth: '1000px' }}>
      <Suspense fallback={null}>
        <Header />
      </Suspense>
      <Suspense fallback={null}>
        <FeaturedBuilds />
      </Suspense>
      <Suspense fallback={null}>
        <SearchableTimeline />
      </Suspense>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </Container>
  );
}

export default App;
