import {
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from '@mui/lab';
import { Box, Chip, Link, Typography } from '@mui/material';

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
        <Typography fontSize={'1.25rem'} fontWeight={700} my={2}>
          <Link
            color={'#1062b9'}
            underline="hover"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {props.title}
          </Link>
        </Typography>
      );
    } else {
      return (
        <Typography
          color={'#4e4d4e'}
          fontSize={'1.25rem'}
          fontWeight={700}
          my={2}
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
        fontSize={'1rem'}
        mt={2}
        display={'flex'}
        justifyContent={'flex-start'}
        alignItems={'center'}
        color="#4e4d4e"
      >
        {props.date}
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot variant="outlined" />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        {titleNode(props.link)}
        <Typography fontSize={'0.87rem'}>
          <span
            dangerouslySetInnerHTML={{
              __html: props.description,
            }}
          />
        </Typography>
        <Box my={2} display="flex" flexWrap="wrap">
          {props.tags?.map((tag) => (
            <Chip
              key={tag}
              label={tag}
              size="small"
              variant="outlined"
              sx={{
                m: 0.5,
                fontSize: '0.65rem',
                color: '#000000',
              }}
            />
          ))}
        </Box>
      </TimelineContent>
    </TimelineItem>
  );
};

export default TimelineNode;
