import { Box, Drawer, IconButton, Link } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { linksData } from '../static-data/header-links-data';
import { useContext } from 'react';
import { ColorModeContext } from '../color-mode-context';

const Header = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  const links = linksData.map((link) => (
    <Link
      mx={1.5}
      fontWeight={800}
      fontSize={'.9rem'}
      color={'#4e4d4e'}
      underline="none"
      key={link.href}
      href={link.href}
      // target={link?.target ?? '_blank'}
      sx={{
        transition: 'color 0.3s ease, transform 0.3s ease',
        '&:hover': {
          color: '#000000',
          transform: 'scale(1.5)',
        },
      }}
    >
      <img
        src={link.logo}
        alt={link.href}
        style={{ height: '35px', width: '35px' }}
      />
    </Link>
  ));

  const drawer = (
    <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
      <Box
        p={2}
        sx={{ width: '15rem' }}
        display={'flex'}
        flexDirection={'column'}
        gap={2}
      >
        {links}
      </Box>
    </Drawer>
  );

  return (
    <Box
      p={1}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <Box
        display="flex"
        justifyContent="flex-start"
        alignItems="center"
        minHeight={'47px'}
      >
        <Link href="/" underline="none">
          <img src="/colebuilds-dev.png" alt="Cole Builds" style={{ height: '30px', width: 'auto' }} />
        </Link>
      </Box>
      <Box display={{ xs: 'none', md: 'flex' }} alignItems="center">
        {links}
        {/* Dark mode toggle */}
        <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
          {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </Box>
      <Box display={{ xs: 'flex', md: 'none' }} alignItems="center">
        <IconButton sx={{ mr: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
          {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
        <IconButton onClick={() => setOpen(true)}>
          <MenuIcon />
        </IconButton>
        {drawer}
      </Box>
    </Box>
  );
};

export default Header;
