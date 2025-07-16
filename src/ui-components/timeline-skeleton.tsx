import { Box, Skeleton } from '@mui/material';
import { Timeline } from '@mui/lab';

const TimelineSkeleton = () => (
  <Timeline>
    {Array.from({ length: 4 }).map((_, idx) => (
      <Box key={idx} mb={4}>
        <Skeleton variant="text" height={24} width="20%" animation="wave" />
        <Skeleton variant="text" height={18} width="60%" animation="wave" />
        <Skeleton variant="rectangular" height={8} width="40%" animation="wave" style={{ borderRadius: 4 }} />
      </Box>
    ))}
  </Timeline>
);

export default TimelineSkeleton;