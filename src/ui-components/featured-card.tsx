import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Fade,
  Typography,
} from '@mui/material';
import { useState } from 'react';

type Props = {
  title: string;
  description: string;
  imageLink: string;
  externalLink: string;
};

const FeaturedCard = (props: Props) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <Card
      sx={{ height: '100%', boxShadow: '0 0 2rem rgba(0,0,0,.1)' }}
      tabIndex={0}
      onFocus={() => setIsActive(true)}
      onBlur={() => setIsActive(false)}
      onMouseOver={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
    >
      <div>
        <Box position={'relative'}>
          <CardMedia
            component="img"
            height="192"
            image={props.imageLink}
            alt={props.title}
            style={{ objectFit: 'contain' }}
            loading="lazy"
            decoding="async"
          />
          <Fade in={isActive}>
            <Box
              sx={{ transform: 'translate(-50%, -50%)' }}
              top={'50%'}
              left={'50%'}
              position={'absolute'}
              height={'100%'}
              width={'100%'}
            >
              <Box
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                height={'100%'}
                bgcolor={'rgba(0,0,0,.5)'}
                color={'#000000'}
              >
                <Button
                  href={props.externalLink}
                  target="_blank"
                  variant="contained"
                  color="inherit"
                  aria-label={`Visit external link for ${props.title}`}
                >
                  See More
                </Button>
              </Box>
            </Box>
          </Fade>
        </Box>

        <CardContent>
          <Typography my={1} variant="h6">
            {props.title}
          </Typography>
          <Typography mb={2} fontSize={'0.875rem'}>
            {props.description}
          </Typography>
        </CardContent>
      </div>
    </Card>
  );
};

export default FeaturedCard;
