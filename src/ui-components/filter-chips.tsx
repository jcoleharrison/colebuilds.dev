import { Box, Chip, Typography } from '@mui/material';

type FilterGroup = {
  label: string;
  filters: string[];
};

type Props = {
  filterGroups: FilterGroup[];
  selectedTags: string[];
  setSelectedTags: React.Dispatch<React.SetStateAction<string[]>>;
};

const FilterChips = (props: Props) => {
  const highlights = [
    { primary: '#9b65a82c', active: '#9b65a8c9' },
    { primary: '#e6707040', active: '#e67070c4' },
    { primary: '#c3ab6d5a', active: '#c3ab6d5a' },
  ];

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const tag = e.currentTarget.textContent;
    if (tag && props.selectedTags.includes(tag)) {
      props.setSelectedTags(props.selectedTags.filter((t) => t !== tag));
    } else if (tag) {
      props.setSelectedTags([...props.selectedTags, tag]);
    }
  };

  return props.filterGroups.map((filterGroup, index) => (
    <Box key={filterGroup.label}>
      <Typography
        variant="h6"
        color="#616161"
        fontWeight={700}
        fontSize={'0.75rem'}
        mb={1.5}
      >
        {filterGroup.label}
      </Typography>
      <Box mb={1.5} display="flex" flexWrap="wrap">
        {filterGroup.filters.map((filter) => (
          <Box
            key={filter}
            sx={{
              ':hover': { cursor: 'pointer' },
            }}
            onClick={handleClick}
          >
            <Chip
              label={filter}
              size="small"
              variant="outlined"
              sx={{
                m: 0.5,
                fontSize: '0.75rem',
                color: '#000000',
                borderRadius: '0.5rem',
                backgroundColor: props.selectedTags.includes(filter)
                  ? highlights[index % 3].active
                  : highlights[index % 3].primary,
                borderColor: 'rgb(237, 237, 237)',
                ':hover': { border: '1px solid #000000' },
                padding: 0.5,
              }}
            />
          </Box>
        ))}
      </Box>
    </Box>
  ));
};

export default FilterChips;
