import { Container } from '@mui/material';
import Header from './components/header';
import FeaturedBuilds from './components/featured-builds';
import SearchableTimeline from './components/searchable-timeline';
import Footer from './components/footer';

function App() {
  return (
    <Container id="main-content" role="main" style={{ maxWidth: '1000px' }}>
      <Header />
      <FeaturedBuilds />
      <SearchableTimeline />
      <Footer />
    </Container>
  );
}

export default App;
