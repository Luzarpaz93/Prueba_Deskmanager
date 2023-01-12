import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material';
import Typography from '@mui/material/Typography';

import swal from 'sweetalert';



async function loginUser(email,password) {
  return fetch('https://dev.deskmanager.app/v1.0/account/login/ios', {
    method: 'POST',
    body: JSON.stringify({
      email: email,
      password: password,
      }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      // 'email': 'contacto@deskmanager.app',
      // 'password' : 'khalrvdWra'
    },
    body: JSON.stringify(email,password)
  })
    .then(data => data.json())
 }

export default function SignIn() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  

    const handleSubmit = async e => {
    e.preventDefault();
    const response = await loginUser({
      email,
      password
    });
    if ('accessToken' in response) {
      swal("Success", response.message, "success")

      .then((value) => {
        localStorage.setItem('accessToken', response['accessToken']);
        localStorage.setItem('email', JSON.stringify(response['email']));
        window.location.href = "/profile";
      });
    } else {
      swal("Failed", response.message, "error");
    }
  }

  return (
    <Grid container >
      <CssBaseline />
      <Grid item xs={false} md={7}  />
      <Grid item xs={12} md={5} component={Paper} elevation={6} square>
        <div>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form noValidate onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              name="email"
              label="Email Address"
              onChange={e => setEmail(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="password"
              name="password"
              label="Password"
              type="password"
              onChange={e => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
            >
              Sign In
            </Button>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}