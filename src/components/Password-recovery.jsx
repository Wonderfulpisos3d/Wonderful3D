import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import imagenLogin from '../assets/ImagenLogin.png';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Fab } from '@mui/material';


export default function PasswordReset() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [resetSuccess, setResetSuccess] = useState(false);
  const [resetError, setResetError] = useState('');

  const auth = getAuth();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleResetPassword = () => {
    setEmailError('');
    setResetSuccess(false);
    setResetError('');

    if (email === '') {
      setEmailError('Por favor, ingresa tu correo electrónico.');
      return;
    }

    sendPasswordResetEmail(auth, email)
      .then(() => {
        setResetSuccess(true);
      })
      .catch((error) => {
        setResetError('Se produjo un error al enviar el correo electrónico de recuperación. Por favor, inténtalo de nuevo más tarde.');
      });
  };

  const handleGoToLogin = () => {
    history.push('/');
    window.location.reload();
  };

  const [isDarkModeOn, setIsDarkModeOn] = useState(false);

  const theme = createTheme({
    palette: {
      mode: isDarkModeOn ? 'dark' : 'light',
      primary: {
        main: '#872D7C',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${imagenLogin})`,
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[500] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
              <Typography component="h1" variant="h5">
                Recuperar Contraseña
              </Typography>
              <Fab color="primary" aria-label="add" onClick={() => setIsDarkModeOn(!isDarkModeOn)}>
                <Brightness4Icon />
              </Fab>
            </Box>
            {!resetSuccess ? (
              <>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  label="Correo Electrónico"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={handleEmailChange}
                  error={!!emailError}
                  helperText={emailError}
                />
                {resetError && (
                  <Typography variant="body2" color="error" align="center" sx={{ mt: 1 }}>
                    {resetError}
                  </Typography>
                )}
                <Button
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={handleResetPassword}
                >
                  Enviar correo de recuperación
                </Button>
                <Button
                  fullWidth
                  variant="text"
                  onClick={handleGoToLogin}
                >
                  Volver al inicio de sesión
                </Button>
              </>
            ) : (
              <>
                <Typography variant="body1" align="center">
                  Se ha enviado un correo electrónico a <strong>{email}</strong> con instrucciones para restablecer tu contraseña.
                </Typography>
                <Button
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={handleGoToLogin}
                >
                  Volver al inicio de sesión
                </Button>
              </>
            )}
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}