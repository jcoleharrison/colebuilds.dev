import { Container } from '@mui/material';
import { Suspense, lazy } from 'react';
import ErrorBoundary from './components/error-boundary';
import FeaturedBuildsSkeleton from './ui-components/featured-builds-skeleton';
import TimelineSkeleton from './ui-components/timeline-skeleton';

const Header = lazy(() => import('./components/header'));
const FeaturedBuilds = lazy(() => import('./components/featured-builds'));
const SearchableTimeline = lazy(() => import('./components/searchable-timeline'));
const Footer = lazy(() => import('./components/footer'));

function App() {
  return (
    <Container id="main-content" role="main" style={{ maxWidth: '1000px' }}>
      <ErrorBoundary>
        <Suspense fallback={null}>
          <Header />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary fallback={<FeaturedBuildsSkeleton />}>
        <Suspense fallback={<FeaturedBuildsSkeleton />}>
          <FeaturedBuilds />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary fallback={<TimelineSkeleton />}>
        <Suspense fallback={<TimelineSkeleton />}>
          <SearchableTimeline />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary>
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </ErrorBoundary>
    </Container>
  );
}

export default App;
