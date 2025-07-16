import { Container, Box } from '@mui/material';
import Header from './components/header';
import FeaturedBuilds from './components/featured-builds';
import SearchableTimeline from './components/searchable-timeline';

function App() {
  return (
    <Box sx={{ minHeight: '100vh', position: 'relative' }}>
      <Container 
        sx={{ 
          maxWidth: '1100px',
          py: 2,
          position: 'relative',
          zIndex: 1,
        }}
      >
        <Box
          sx={{
            background: 'rgba(255, 255, 255, 0.7)',
            backdropFilter: 'blur(10px)',
            borderRadius: '20px',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.06)',
            border: '1px solid rgba(255, 255, 255, 0.8)',
            overflow: 'hidden',
            animation: 'fadeIn 0.8s ease-out',
          }}
        >
          <Header />
          <Box sx={{ px: { xs: 2, sm: 3, md: 4 }, pb: 4 }}>
            <FeaturedBuilds />
            <SearchableTimeline />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default App;
