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
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

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
      sx={{ 
        height: '100%', 
        boxShadow: 'none',
        background: 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(0, 0, 0, 0.05)',
        borderRadius: '16px',
        overflow: 'hidden',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        cursor: 'pointer',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.08)',
          background: 'rgba(255, 255, 255, 0.95)',
          '& .card-image': {
            transform: 'scale(1.05)',
          },
          '& .arrow-icon': {
            transform: 'translateX(4px)',
          }
        }
      }}
    >
      <div
        onMouseOver={() => setIsActive(true)}
        onMouseLeave={() => setIsActive(false)}
      >
        <Box 
          position={'relative'} 
          overflow={'hidden'}
          sx={{
            background: 'linear-gradient(135deg, #f5f7fa 0%, #f3f4f6 100%)',
          }}
        >
          <CardMedia
            component="img"
            height="200"
            image={props.imageLink}
            alt="Featured Project Image"
            className="card-image"
            sx={{ 
              objectFit: 'contain',
              transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
              padding: 2,
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(to top, rgba(0,0,0,0.1) 0%, transparent 50%)',
              opacity: isActive ? 1 : 0,
              transition: 'opacity 0.3s ease',
            }}
          />
          <Fade in={isActive}>
            <Box
              sx={{
                position: 'absolute',
                bottom: 16,
                right: 16,
              }}
            >
              <Button
                href={props.externalLink}
                target="_blank"
                variant="contained"
                size="small"
                sx={{
                  background: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(10px)',
                  color: '#0f172a',
                  fontWeight: 600,
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                  '&:hover': {
                    background: 'rgba(255, 255, 255, 1)',
                    boxShadow: '0 6px 16px rgba(0, 0, 0, 0.15)',
                  }
                }}
                endIcon={<ArrowForwardIcon className="arrow-icon" sx={{ transition: 'transform 0.3s ease' }} />}
              >
                View Project
              </Button>
            </Box>
          </Fade>
        </Box>

        <CardContent sx={{ p: 3 }}>
          <Typography 
            variant="h6" 
            mb={1.5}
            sx={{
              fontWeight: 700,
              fontSize: '1.125rem',
              color: '#0f172a',
              lineHeight: 1.4,
            }}
          >
            {props.title}
          </Typography>
          <Typography 
            fontSize={'0.875rem'}
            color="text.secondary"
            sx={{
              lineHeight: 1.7,
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            {props.description}
          </Typography>
        </CardContent>
      </div>
    </Card>
  );
};

export default FeaturedCard;
