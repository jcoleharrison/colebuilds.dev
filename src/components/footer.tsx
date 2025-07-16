import { Box, Link, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box component="footer" py={4} textAlign="center">
      <Typography variant="body2" color="text.secondary" mb={0.5}>
        © {new Date().getFullYear()} Cole Builds. Built with React & Vite.
      </Typography>
      <Typography variant="body2" color="text.secondary">
        <Link href="mailto:cole@example.com" underline="hover" sx={{ mx: 0.5 }}>
          Contact
        </Link>
        |
        <Link href="https://github.com/jcoleharrison" target="_blank" underline="hover" sx={{ mx: 0.5 }}>
          GitHub
        </Link>
        |
        <Link href="https://twitter.com/cole__ai" target="_blank" underline="hover" sx={{ mx: 0.5 }}>
          Twitter
        </Link>
      </Typography>
    </Box>
  );
};

export default Footer;