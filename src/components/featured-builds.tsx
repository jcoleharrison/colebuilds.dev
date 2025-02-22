import { Box, Grid2, Typography } from '@mui/material';
import FeaturedCard from '../ui-components/featured-card';
import { cardData } from '../static-data/featured-cards-data';

const FeaturedBuilds = () => {
  const flexBoxStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column' as const,
  };

  const cards = cardData.map((card, index) => (
    <Grid2 key={index} size={1}>
      <FeaturedCard
        title={card.title}
        description={card.description}
        imageLink={card.imageLink}
        externalLink={card.externalLink}
      />
    </Grid2>
  ));

  return (
    <>
      <Box pt={5} pb={2} {...flexBoxStyle}>
        <Typography mb={1} variant="h2">
          build-in-public log
        </Typography>
        <Typography
          fontSize={'1.25rem'}
          fontWeight={300}
          color="#81878b"
          mb={5}
        >
          some of my tools and experiments
        </Typography>
      </Box>

      <Box {...flexBoxStyle}>
        <Typography mb={2} variant="h3">
          Featured Builds
        </Typography>

        <Grid2 mt={2} container spacing={2} columns={{ xs: 1, sm: 1, md: 3 }}>
          {cards}
        </Grid2>
      </Box>
    </>
  );
};

export default FeaturedBuilds;
