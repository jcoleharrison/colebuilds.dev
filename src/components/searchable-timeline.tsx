import { Box, Grid2, Typography } from '@mui/material';
import Searchbar from '../ui-components/searchbar';
import FilterChips from '../ui-components/filter-chips';
import { filterGroups } from '../static-data/filter-groups-data';
import { Timeline } from '@mui/lab';
import TimelineNode, { TimelineItem } from '../ui-components/timeline-node';
import { useEffect, useState } from 'react';
import { timelineData as staticTimelineData } from '../static-data/timeline-data';

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
    <Box mt={5} textAlign={'center'}>
      <Typography color="#6F6F6F">
        No results found, try adjusting your search and filters.
      </Typography>
    </Box>
  );

  const errorState = error && (
    <Box mt={5} textAlign={'center'}>
      <Typography color="#6F6F6F">
        Oops! Something went wrong. Please try again later.
      </Typography>
    </Box>
  );

  const timelineNodes = filteredTimelineData.map((item, index) => (
    <TimelineNode key={index} {...item} />
  ));

  return (
    <Box mb={5} minHeight={'90vh'}>
      <Searchbar search={search} setSearch={setSearch} />
      <Grid2 container spacing={2} columns={{ xs: 1, sm: 1, md: 4 }}>
        <Grid2 size={1}>
          <FilterChips
            selectedTags={selectedTags}
            setSelectedTags={setSelectedTags}
            filterGroups={filterGroups}
          />
        </Grid2>
        <Grid2 size={3}>
          <Timeline>
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
