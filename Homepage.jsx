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
          <Button variant="contained" color="primary" size='large' sx={{ bgcolor: '#36454F', color: '#fff' }}>LET'S START</Button>
        </Box>
      </center>
    </Box>
  );
}
