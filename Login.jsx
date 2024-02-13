import React, { useState } from 'react';
import NavBar from './NavBar';
import { Box, Container, Button, TextField } from '@mui/material';
import { grey } from '@mui/material/colors';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Add your authentication logic here
    console.log('Logging in with:', username, password);
  };

  return (
    <div>
      <NavBar />
      <Container maxWidth="sm">
        <Box
          bgcolor={grey[100]}
          boxShadow={3}
          borderRadius={8}
          p={3}
          mt={5}
          textAlign="center"
        >
          <h2>Login</h2>
          <form>
            <TextField
              label="Username"
              variant="outlined"
              fullWidth
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{ marginBottom: 20 }}
            />
            <br />
            <TextField
              label="Password"
              variant="outlined"
              type="password"
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ marginBottom: 20 }}
            />
            <br />
            <Button
              variant="contained"
              color="primary"
              onClick={handleLogin}
              style={{ width: '100%', padding: 15 }}
            >
              Login
            </Button>
          </form>
        </Box>
      </Container>
    </div>
  );
};

export default Login;
