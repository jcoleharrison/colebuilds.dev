import { Box, Drawer, IconButton, Link } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { linksData } from '../static-data/header-links-data';

const Header = () => {
  const [open, setOpen] = useState(false);

  const links = linksData.map((link) => (
    <Link
      mx={4}
      fontWeight={600}
      color="#000000"
      underline="none"
      key={link.label}
      href={link.href}
      target={link?.target ?? '_blank'}
    >
      {link.label}
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
        justifyContent="space-between"
        alignItems="center"
        minHeight={'47px'}
      >
        <a href="/">temp label</a>
      </Box>
      <Box display={{ xs: 'none', md: 'block' }}>{links}</Box>
      <Box display={{ xs: 'block', md: 'none' }}>
        <IconButton onClick={() => setOpen(true)}>
          <MenuIcon />
        </IconButton>
        {drawer}
      </Box>
    </Box>
  );
};

export default Header;
