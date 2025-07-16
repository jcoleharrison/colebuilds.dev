import { Box, Drawer, IconButton, Link } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { linksData } from '../static-data/header-links-data';

const Header = () => {
  const [open, setOpen] = useState(false);
  const links = linksData.map((link) => (
    <Link
      mx={2}
      fontWeight={600}
      fontSize={'.9rem'}
      color={'text.primary'}
      underline="none"
      key={link.href}
      href={link.href}
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '45px',
        height: '45px',
        borderRadius: '12px',
        background: 'rgba(255, 255, 255, 0.5)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.3)',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        '&:hover': {
          transform: 'translateY(-3px) scale(1.05)',
          background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.1) 0%, rgba(124, 58, 237, 0.1) 100%)',
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
          '& img': {
            filter: 'brightness(1.2)',
          }
        },
      }}
    >
      <img
        src={link.logo}
        alt={link.href}
        style={{ 
          height: '28px', 
          width: '28px',
          transition: 'filter 0.3s ease',
        }}
      />
    </Link>
  ));

  const drawer = (
    <Drawer 
      anchor="right" 
      open={open} 
      onClose={() => setOpen(false)}
      PaperProps={{
        sx: {
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(20px)',
          width: '280px',
        }
      }}
    >
      <Box
        p={3}
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
      p={3}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      sx={{
        borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
        background: 'linear-gradient(to right, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.6))',
      }}
    >
      <Box
        display="flex"
        justifyContent="flex-start"
        alignItems="center"
        minHeight={'50px'}
      >
        <Link href="/" underline="none">
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              padding: '8px 16px',
              borderRadius: '12px',
              transition: 'all 0.3s ease',
              '&:hover': {
                background: 'rgba(0, 0, 0, 0.02)',
                transform: 'translateX(4px)',
              }
            }}
          >
            <img 
              src="/colebuilds-dev.png" 
              alt="Cole Builds" 
              style={{ 
                height: '35px', 
                width: 'auto',
                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))',
              }} 
            />
          </Box>
        </Link>
      </Box>
      <Box display={{ xs: 'none', md: 'flex' }} gap={1} alignItems="center">
        {links}
      </Box>
      <Box display={{ xs: 'block', md: 'none' }}>
        <IconButton 
          onClick={() => setOpen(true)}
          sx={{
            background: 'rgba(255, 255, 255, 0.5)',
            backdropFilter: 'blur(10px)',
            '&:hover': {
              background: 'rgba(37, 99, 235, 0.1)',
            }
          }}
        >
          <MenuIcon />
        </IconButton>
        {drawer}
      </Box>
    </Box>
  );
};

export default Header;
