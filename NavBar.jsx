import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Button, IconButton, Toolbar, Typography ,Box ,AppBar } from '@mui/material';

function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton align="center"
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            From You
          </Typography>
          <Button color="inherit">Sign In</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;
