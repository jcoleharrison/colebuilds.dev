import { Container } from '@mui/material';
import Header from './components/header';
import FeaturedBuilds from './components/featured-builds';
import SearchableTimeline from './components/searchable-timeline';

function App() {
  return (
    <Container style={{ maxWidth: '1000px' }}>
      <Header />
      <FeaturedBuilds />
      <SearchableTimeline />
    </Container>
  );
}

export default App;
