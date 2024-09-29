import { useHistory } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import { getFirestore} from 'firebase/firestore';
import { useEffect, useState, useMemo } from 'react';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Fab } from '@mui/material';

import firebaseApp from '../firebaseConfig';
import imagenLogin from '../assets/ImagenLogin.png';
import HelpIcon from "@mui/icons-material/Help";

export default function SignIn() {
  const history = useHistory();
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [loginError, setLoginError] = useState('');
  const firestore = getFirestore(firebaseApp);

  const auth = getAuth();
  const [data, setData] = useState({
    email: '',
    password: '',
    rol: '',
  });
  const handleInputs = (event) => {
    let inputs = { [event.target.name]: event.target.value };
    setData({ ...data, ...inputs });
  };

  const [isLoading, setIsLoading] = useState(false); // Add a state for loading

  const addData = () => {
    // Restablecer los mensajes de error
    setEmailError('');
    setPasswordError('');
    setLoginError('');

    // Validar los datos antes de iniciar sesión
    let valid = true;
    if (data.email === '') {
      setEmailError('Por favor, ingresa tu correo electrónico.');
      valid = false;
    }
    if (data.password === '') {
      setPasswordError('Por favor, ingresa tu contraseña.');
      valid = false;
    }

    // Iniciar sesión solo si los datos son válidos
    if (valid) {
      setIsLoading(true); // Set loading state to true

      signInWithEmailAndPassword(auth, data.email, data.password)
        .then(() => {
          setTimeout(() => {
            setIsLoading(false); // Set loading state to false after 2 seconds
            history.push('/home');
          }, 1500);
        })
        .catch((error) => {
          setIsLoading(false); // Set loading state to false in case of error

          if (error.code === 'auth/user-not-found') {
            setLoginError('El correo electrónico ingresado no está registrado.');
          } else if (error.code === 'auth/wrong-password') {
            setLoginError('La contraseña ingresada es incorrecta.');
          } else {
            setLoginError('Se produjo un error al iniciar sesión. Por favor, inténtalo de nuevo más tarde.');
          }
        });
    }
  };

  useEffect(() => {
    onAuthStateChanged(auth, (data) => {
      if (data) {
      } else {
      }
    });
  }, []);

  const [isDarkModeOn, setIsDarkModeOn] = useState(false);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: isDarkModeOn === true ? 'dark' : 'light',
          primary: {
            main: '#872D7C',
          },
        },
      }),
    [isDarkModeOn]
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
  };

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
            backgroundColor: (t) => (t.palette.mode === 'light' ? t.palette.grey[500] : t.palette.grey[900]),
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
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
                alignItems: 'center',
              }}
            >
              <Typography component="h1" variant="h5">
                Iniciar Sesión
              </Typography>
              <Fab color="primary" aria-label="add" onClick={() => setIsDarkModeOn(!isDarkModeOn)}>
                <Brightness4Icon />
              </Fab>
            </Box>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                name="email"
                label="Correo Electrónico"
                type="email"
                id="email"
                autoComplete="email"
                className="input-fields"
                onChange={(event) => handleInputs(event)}
                error={!!emailError} // Aplicar el estado de error al campo de texto
                helperText={emailError} // Mostrar el mensaje de error debajo del campo de texto
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Contraseña"
                type="password"
                id="password"
                autoComplete="current-password"
                className="input-fields"
                onChange={(event) => handleInputs(event)}
                error={!!passwordError} // Aplicar el estado de error al campo de texto
                helperText={passwordError} // Mostrar el mensaje de error debajo del campo de texto
              />
              {loginError && (
                <Typography variant="body2" color="error" align="center" sx={{ mt: 1 }}>
                  {loginError}
                </Typography>
              )}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={addData}
              >
                {isLoading ? (
                  <CircularProgress size={24} color="inherit" />
                ) : (
                  'Ingresar'
                )}
              </Button>
              <Button
                component="a"
                href="/recuperar-contraseña" // Reemplaza esto con la ruta correcta
                fullWidth
                variant="text"
                sx={{ mt: 1 }}
              >
                ¿Olvidaste tu contraseña?
              </Button>
              <Button
                component="a"
                href="mailto:soporte@wonderful3d.us?subject=Soporte Wonderful3D" // Reemplaza esto con la ruta correcta
                startIcon={<HelpIcon />}
                fullWidth
                variant="text"
                sx={{ mt: 1 }}
              >
                Soporte
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}