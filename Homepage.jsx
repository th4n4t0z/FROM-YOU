// Import the necessary components
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Box from '@mui/material/Box';
import InfoIcon from '@mui/icons-material/Info';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

// Import the background image
import pichome from './Images/pichome.jpg';

export default function ButtonAppBar() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        backgroundImage: `url(${pichome})`, // Specify the background image here
        backgroundSize: 'cover',

      }}
    >
      <AppBar position="static" style={{ background: '#36454F' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'left' }}>
            FROM YOU
          </Typography>
          <Button color="inherit"><HomeIcon /></Button>
          <Button color="inherit"><InfoIcon /></Button>
          {/* Add the Link component here */}
          <Link to="/login" style={{ color: 'inherit', textDecoration: 'none' }}><Button color="inherit"><AccountCircleIcon /></Button></Link>
        </Toolbar>
      </AppBar>
      <center>
      <Box sx={{ marginTop: '250px' }}>
        <Button variant="contained" color="primary" size='large'  sx={{ bgcolor: '#36454F', color: '#fff' }}>DONATE</Button>
        <Button variant="contained" color="primary" size='large' style={{ marginLeft: '10px' }} sx={{ bgcolor: '#36454F', color: '#fff' }}>RECEIVE</Button>
      </Box>
      </center>
      <Box sx={{ mt: 4, mx: 'auto', maxWidth: '1000px', textAlign: 'center', p: 50}}>
        <Typography variant="h4" gutterBottom>
          About Us
        </Typography>
        <Typography variant="body1" paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eleifend tortor sed ultricies aliquet. 
          Morbi nec dui non massa consequat hendrerit a sed sem. Donec nec ultrices velit.
        </Typography>
        <Typography variant="body1" paragraph>
          Fusce vitae eleifend eros. Integer posuere eros eu tellus tempus vehicula.
          Nulla facilisi. Vivamus sed tortor eget lectus vestibulum dapibus.
        </Typography>
      </Box>
    </Box>
  );
}
