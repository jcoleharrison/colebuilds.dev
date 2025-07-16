import {
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from '@mui/lab';
import { Box, Chip, Link, Typography } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

export type TimelineItem = {
  date: string;
  title: string;
  description: string;
  tags?: string[];
  link?: string;
};

type Props = TimelineItem;

const TimelineNode = (props: Props) => {
  const titleNode = (link: string | undefined) => {
    if (link) {
      return (
        <Typography 
          fontSize={'1.25rem'} 
          fontWeight={700} 
          mb={2}
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 1,
          }}
        >
          <Link
            color={'primary.main'}
            underline="none"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 0.5,
              transition: 'all 0.2s ease',
              '&:hover': {
                color: 'primary.dark',
                '& .link-icon': {
                  transform: 'translate(2px, -2px)',
                }
              }
            }}
          >
            {props.title}
            <OpenInNewIcon 
              className="link-icon" 
              sx={{ 
                fontSize: '1rem',
                opacity: 0.7,
                transition: 'transform 0.2s ease',
              }} 
            />
          </Link>
        </Typography>
      );
    } else {
      return (
        <Typography
          color={'text.primary'}
          fontSize={'1.25rem'}
          fontWeight={700}
          mb={2}
        >
          {props.title}
        </Typography>
      );
    }
  };

  return (
    <TimelineItem>
      <TimelineOppositeContent
        maxWidth={'200px'}
        fontWeight={600}
        fontSize={'0.875rem'}
        mt={2.5}
        display={'flex'}
        justifyContent={'flex-start'}
        alignItems={'center'}
        color="text.secondary"
        sx={{
          opacity: 0.8,
        }}
      >
        {props.date}
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot 
          sx={{
            background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
            border: 'none',
            boxShadow: '0 4px 12px rgba(37, 99, 235, 0.3)',
            width: '12px',
            height: '12px',
          }}
        />
        <TimelineConnector 
          sx={{
            background: 'linear-gradient(to bottom, rgba(37, 99, 235, 0.2), rgba(124, 58, 237, 0.1))',
            width: '2px',
          }}
        />
      </TimelineSeparator>
      <TimelineContent>
        <Box
          sx={{
            background: 'rgba(255, 255, 255, 0.6)',
            backdropFilter: 'blur(10px)',
            borderRadius: '12px',
            padding: 3,
            border: '1px solid rgba(0, 0, 0, 0.05)',
            transition: 'all 0.3s ease',
            '&:hover': {
              background: 'rgba(255, 255, 255, 0.8)',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.06)',
              transform: 'translateX(4px)',
            }
          }}
        >
          {titleNode(props.link)}
          <Typography 
            fontSize={'0.875rem'}
            color="text.secondary"
            sx={{
              lineHeight: 1.8,
            }}
          >
            <span
              dangerouslySetInnerHTML={{
                __html: props.description,
              }}
            />
          </Typography>
          {props.tags && props.tags.length > 0 && (
            <Box mt={2} display="flex" flexWrap="wrap" gap={1}>
              {props.tags.map((tag) => (
                <Chip
                  key={tag}
                  label={tag}
                  size="small"
                  sx={{
                    fontSize: '0.75rem',
                    fontWeight: 500,
                    background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.08) 0%, rgba(124, 58, 237, 0.08) 100%)',
                    border: '1px solid rgba(37, 99, 235, 0.2)',
                    color: 'primary.main',
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.15) 0%, rgba(124, 58, 237, 0.15) 100%)',
                      borderColor: 'primary.main',
                      transform: 'translateY(-1px)',
                    }
                  }}
                />
              ))}
            </Box>
          )}
        </Box>
      </TimelineContent>
    </TimelineItem>
  );
};

export default TimelineNode;
