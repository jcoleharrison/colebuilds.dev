import { Close, Search } from '@mui/icons-material';
import { Box, IconButton, InputBase } from '@mui/material';

type Props = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

const Searchbar = (props: Props) => {
  return (
    <Box my={4}>
      <Box
        sx={{
          ':hover': { borderColor: '#000000' },
          border: '1px solid #c2c2c2',
        }}
        display={'flex'}
        alignItems="center"
        borderRadius={2}
      >
        <IconButton disabled size="small">
          <Search />
        </IconButton>
        <InputBase
          onChange={(e) => props.setSearch(e.target.value)}
          fullWidth
          placeholder="Type here to search"
          size="small"
          value={props.search}
        />
        {props.search.length > 0 && (
          <IconButton onClick={() => props.setSearch('')} size="small">
            <Close />
          </IconButton>
        )}
      </Box>
    </Box>
  );
};

export default Searchbar;
