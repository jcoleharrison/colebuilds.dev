import { Close, Search } from '@mui/icons-material';
import { Box, IconButton, InputBase } from '@mui/material';

type Props = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

const Searchbar = (props: Props) => {
  return (
    <Box my={5}>
      <Box
        sx={{
          background: 'rgba(255, 255, 255, 0.7)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(0, 0, 0, 0.06)',
          borderRadius: '16px',
          display: 'flex',
          alignItems: 'center',
          padding: '4px 8px',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
          '&:hover': {
            background: 'rgba(255, 255, 255, 0.85)',
            borderColor: 'rgba(37, 99, 235, 0.2)',
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.06)',
          },
          '&:focus-within': {
            background: 'rgba(255, 255, 255, 0.95)',
            borderColor: 'primary.main',
            boxShadow: '0 0 0 3px rgba(37, 99, 235, 0.1), 0 4px 16px rgba(0, 0, 0, 0.06)',
            transform: 'translateY(-1px)',
          },
        }}
      >
        <IconButton 
          disabled 
          size="small"
          sx={{
            color: 'text.secondary',
            '&.Mui-disabled': {
              color: 'text.secondary',
              opacity: 0.7,
            },
          }}
        >
          <Search />
        </IconButton>
        <InputBase
          onChange={(e) => props.setSearch(e.target.value)}
          fullWidth
          placeholder="Search projects, tools, or experiments..."
          size="small"
          value={props.search}
          sx={{
            ml: 1,
            fontSize: '0.95rem',
            '& ::placeholder': {
              color: 'text.secondary',
              opacity: 0.8,
            },
          }}
        />
        {props.search.length > 0 && (
          <IconButton 
            onClick={() => props.setSearch('')} 
            size="small"
            sx={{
              ml: 1,
              transition: 'all 0.2s ease',
              '&:hover': {
                background: 'rgba(0, 0, 0, 0.04)',
                transform: 'rotate(90deg)',
              },
            }}
          >
            <Close fontSize="small" />
          </IconButton>
        )}
      </Box>
    </Box>
  );
};

export default Searchbar;
