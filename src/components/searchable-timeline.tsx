import { Box, Grid2, Typography } from '@mui/material';
import Searchbar from '../ui-components/searchbar';
import FilterChips from '../ui-components/filter-chips';
import { filterGroups } from '../static-data/filter-groups-data';
import { Timeline } from '@mui/lab';
import TimelineNode, { TimelineItem } from '../ui-components/timeline-node';
import { useEffect, useState } from 'react';
import { timelineData as staticTimelineData } from '../static-data/timeline-data';
import SearchOffIcon from '@mui/icons-material/SearchOff';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const SearchableTimeline = () => {
  const [timelineData, setTimelineData] = useState<TimelineItem[]>([]);
  const [search, setSearch] = useState<string>('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = () => {
      try {
      setTimelineData(staticTimelineData);
      } catch (e) {
      console.log(e);
      setError(true);
      }
    };

    fetchData();
  }, []);

  const filteredTimelineData = timelineData
    .filter((item) => {
      const matchesSearch = item.title
        .toLowerCase()
        .includes(search.toLowerCase());
      const matchesTags =
        selectedTags.length === 0 ||
        selectedTags.some((tag) => item.tags?.includes(tag));
      return matchesSearch && matchesTags;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const emptyState = filteredTimelineData.length === 0 && (
    <Box 
      mt={8} 
      textAlign={'center'}
      sx={{
        animation: 'fadeIn 0.6s ease-out',
      }}
    >
      <SearchOffIcon 
        sx={{ 
          fontSize: '4rem', 
          color: 'text.secondary',
          opacity: 0.3,
          mb: 2,
        }} 
      />
      <Typography 
        color="text.secondary" 
        fontSize="1.125rem"
        fontWeight={500}
      >
        No results found
      </Typography>
      <Typography 
        color="text.secondary" 
        fontSize="0.875rem"
        mt={1}
        sx={{ opacity: 0.8 }}
      >
        Try adjusting your search terms or filters
      </Typography>
    </Box>
  );

  const errorState = error && (
    <Box 
      mt={8} 
      textAlign={'center'}
      sx={{
        animation: 'fadeIn 0.6s ease-out',
      }}
    >
      <ErrorOutlineIcon 
        sx={{ 
          fontSize: '4rem', 
          color: 'error.main',
          opacity: 0.5,
          mb: 2,
        }} 
      />
      <Typography 
        color="text.primary" 
        fontSize="1.125rem"
        fontWeight={600}
      >
        Oops! Something went wrong
      </Typography>
      <Typography 
        color="text.secondary" 
        fontSize="0.875rem"
        mt={1}
      >
        Please try refreshing the page
      </Typography>
    </Box>
  );

  const timelineNodes = filteredTimelineData.map((item, index) => (
    <Box
      key={index}
      sx={{
        animation: 'slideIn 0.6s ease-out',
        animationDelay: `${Math.min(index * 0.1, 0.5)}s`,
        animationFillMode: 'both',
      }}
    >
      <TimelineNode {...item} />
    </Box>
  ));

  return (
    <Box 
      mb={5} 
      minHeight={'90vh'}
      sx={{
        mt: 8,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          mb: 4,
          animation: 'fadeIn 0.8s ease-out',
        }}
      >
        <Typography 
          variant="h3" 
          fontWeight={700}
          sx={{
            background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Timeline
        </Typography>
        <Box
          sx={{
            px: 2,
            py: 0.5,
            borderRadius: '100px',
            background: 'rgba(37, 99, 235, 0.1)',
            border: '1px solid rgba(37, 99, 235, 0.2)',
          }}
        >
          <Typography
            fontSize="0.875rem"
            fontWeight={600}
            color="primary.main"
          >
            {filteredTimelineData.length} items
          </Typography>
        </Box>
      </Box>
      
      <Searchbar search={search} setSearch={setSearch} />
      
      <Grid2 container spacing={4} columns={{ xs: 1, sm: 1, md: 4 }}>
        <Grid2 size={1}>
          <FilterChips
            selectedTags={selectedTags}
            setSelectedTags={setSelectedTags}
            filterGroups={filterGroups}
          />
        </Grid2>
        <Grid2 size={3}>
          <Timeline
            sx={{
              padding: 0,
              margin: 0,
            }}
          >
            {timelineNodes}
            {emptyState}
            {errorState}
          </Timeline>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default SearchableTimeline;
