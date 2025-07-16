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
    { 
      primary: 'rgba(124, 58, 237, 0.08)', 
      active: 'rgba(124, 58, 237, 0.15)',
      border: 'rgba(124, 58, 237, 0.3)',
      text: '#7c3aed'
    },
    { 
      primary: 'rgba(37, 99, 235, 0.08)', 
      active: 'rgba(37, 99, 235, 0.15)',
      border: 'rgba(37, 99, 235, 0.3)',
      text: '#2563eb'
    },
    { 
      primary: 'rgba(16, 185, 129, 0.08)', 
      active: 'rgba(16, 185, 129, 0.15)',
      border: 'rgba(16, 185, 129, 0.3)',
      text: '#10b981'
    },
  ];

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const tag = e.currentTarget.textContent;
    if (tag && props.selectedTags.includes(tag)) {
      props.setSelectedTags(props.selectedTags.filter((t) => t !== tag));
    } else if (tag) {
      props.setSelectedTags([...props.selectedTags, tag]);
    }
  };

  return (
    <Box
      sx={{
        position: 'sticky',
        top: '20px',
        maxHeight: 'calc(100vh - 40px)',
        overflowY: 'auto',
        pr: 2,
        '&::-webkit-scrollbar': {
          width: '6px',
        },
        '&::-webkit-scrollbar-track': {
          background: 'transparent',
        },
        '&::-webkit-scrollbar-thumb': {
          background: 'rgba(0, 0, 0, 0.1)',
          borderRadius: '3px',
          '&:hover': {
            background: 'rgba(0, 0, 0, 0.2)',
          }
        },
      }}
    >
      {props.filterGroups.map((filterGroup, index) => (
        <Box 
          key={filterGroup.label} 
          mb={3}
          sx={{
            animation: 'fadeIn 0.6s ease-out',
            animationDelay: `${index * 0.1}s`,
            animationFillMode: 'both',
          }}
        >
          <Typography
            variant="h6"
            color="text.secondary"
            fontWeight={600}
            fontSize={'0.875rem'}
            mb={2}
            sx={{
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              opacity: 0.8,
            }}
          >
            {filterGroup.label}
          </Typography>
          <Box display="flex" flexWrap="wrap" gap={1}>
            {filterGroup.filters.map((filter) => {
              const isSelected = props.selectedTags.includes(filter);
              const colorScheme = highlights[index % highlights.length];
              
              return (
                <Box
                  key={filter}
                  sx={{
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    '&:hover': { 
                      transform: 'translateY(-2px)',
                    },
                  }}
                  onClick={handleClick}
                >
                  <Chip
                    label={filter}
                    size="small"
                    sx={{
                      fontSize: '0.8rem',
                      fontWeight: isSelected ? 600 : 500,
                      borderRadius: '8px',
                      backgroundColor: isSelected ? colorScheme.active : colorScheme.primary,
                      borderColor: isSelected ? colorScheme.border : 'transparent',
                      border: '1px solid',
                      color: isSelected ? colorScheme.text : 'text.primary',
                      transition: 'all 0.2s ease',
                      '&:hover': { 
                        backgroundColor: isSelected ? colorScheme.active : colorScheme.primary,
                        borderColor: colorScheme.border,
                        transform: 'scale(1.05)',
                        boxShadow: isSelected 
                          ? `0 4px 12px ${colorScheme.border}40`
                          : '0 2px 8px rgba(0, 0, 0, 0.08)',
                      },
                      padding: '4px 12px',
                      height: 'auto',
                    }}
                  />
                </Box>
              );
            })}
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default FilterChips;
