import { Skeleton } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2';

const FeaturedBuildsSkeleton = () => (
  <Grid2 container spacing={2} columns={{ xs: 1, sm: 1, md: 3 }}>
    {Array.from({ length: 3 }).map((_, idx) => (
      <Grid2 key={idx} size={1}>
        <Skeleton variant="rectangular" height={250} animation="wave" />
      </Grid2>
    ))}
  </Grid2>
);

export default FeaturedBuildsSkeleton;