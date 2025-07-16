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
      <Box pt={10} pb={4} {...flexBoxStyle}>
        <Typography 
          mb={2} 
          variant="h2" 
          fontWeight={900}
          sx={{
            background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textAlign: 'center',
            animation: 'fadeIn 0.8s ease-out',
          }}
        >
          build-in-public log
        </Typography>
        <Typography
          fontSize={'1.125rem'}
          fontWeight={400}
          color="text.secondary"
          mb={6}
          sx={{
            textAlign: 'center',
            maxWidth: '600px',
            lineHeight: 1.8,
            animation: 'fadeIn 0.8s ease-out 0.2s',
            animationFillMode: 'both',
          }}
        >
          A collection of tools, experiments, and projects built with modern web technologies
        </Typography>
      </Box>

      <Box {...flexBoxStyle} mb={8}>
        <Box
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 1,
            mb: 4,
            padding: '8px 24px',
            borderRadius: '100px',
            background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.1) 0%, rgba(124, 58, 237, 0.1) 100%)',
            border: '1px solid rgba(37, 99, 235, 0.2)',
            animation: 'fadeIn 0.8s ease-out 0.4s',
            animationFillMode: 'both',
          }}
        >
          <Box
            sx={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
              animation: 'pulse 2s ease-in-out infinite',
            }}
          />
          <Typography 
            variant="h3" 
            fontWeight={700}
            sx={{
              fontSize: '1.5rem',
              background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Featured Builds
          </Typography>
        </Box>

        <Grid2 
          container 
          spacing={3} 
          columns={{ xs: 1, sm: 1, md: 3 }}
          sx={{
            animation: 'fadeIn 0.8s ease-out 0.6s',
            animationFillMode: 'both',
          }}
        >
          {cards}
        </Grid2>
      </Box>
    </>
  );
};

export default FeaturedBuilds;
