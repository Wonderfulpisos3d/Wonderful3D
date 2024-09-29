import React, { useState, useEffect } from 'react';
import { Button, TextField, Paper, Box, Typography, Select, MenuItem, InputLabel } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export default function RegistroPage() {

  const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };
  
  /*const cities = [
    "Albuquerque", "Arlington", "Atlanta", "Austin", "Baltimore", "Boston", "Charleston", "Charlotte",
    "Chicago", "Dallas", "Houston", "Las Vegas", "Los Angeles", "Miami", "Minneapolis", "Nashville",
    "Newark NJ", "New York", "Orlando", "Philadelphia", "Phoenix", "San Antonio", "San Diego",
    "San Jose", "Seattle", "Tampa" 
  ];*/

  const cities = [
    "Seattle", "Nashville", "San Jose", "Charleston", "Mexico City", "Sevilla" 
  ]
  const [isDarkModeOn, setIsDarkModeOn] = useState(false);
  const [password, setPassword] = useState('');
  const [data, setData] = useState({
    username: '',
    email: '',
    password: '',
    rol: 'user-1',
    date: getCurrentDate(),
    city: 'online'
  });
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [error, setError] = useState(null);


  const handleInputs = (event) => {
    let inputs = { [event.target.name]: event.target.value };
    setData((prevData) => ({
      ...prevData,
      ...inputs,
    }));
  };

  const handlePaymentMethodChange = (event) => {
    setData((prevData) => ({
      ...prevData,
      paymentMethod: event.target.value,
    }));
  };

  const theme = createTheme({
    palette: {
      mode: isDarkModeOn ? 'dark' : 'light',
      primary: {
        main: '#8A2BE2',
        green: '#1cad1c',
        orange: '#f54f02',
      },
    },
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validar campos
    if (!validateEmail(data.email)) {
      setError('El formato del correo electrónico es inválido');
      return;
    }

    try {
      // Envía la información al backend
      const response = await fetch('https://us-central1-fir-proyect-7e9ea.cloudfunctions.net/registerUserbyStripe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setRegistrationSuccess(true);
        setPassword('');
        setData({
          username: '',
          email: '',
          password: '',
          rol: 'user-1',
          date: '',
          city: 'online'
        });
        setError(null);
      }
    } catch (error) {
      setError('Error al comunicarse con el servidor');
    }
  };

  const generarContraseña = () => {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let nuevaContraseña = '';

    for (let i = 0; i < 8; i++) {
      nuevaContraseña += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }

    setPassword(nuevaContraseña);
    setData((prevData) => ({
      ...prevData,
      password: nuevaContraseña,
    }));
  };

  useEffect(() => {
    if (registrationSuccess) {
      const timer = setTimeout(() => {
        setRegistrationSuccess(false);
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [registrationSuccess]);

  // Función para validar el formato de correo electrónico
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="flex justify-center items-center h-screen bg-#8A2BE2-800">
        <Paper className="flex flex-col items-center w-full max-w-lg p-4">
          <div className="flex justify-between items-center w-full">
            <Typography component="h1" variant="h5">
              Registro Cursos
            </Typography>
          </div>
          <form className="mt-2 w-full" onSubmit={handleSubmit}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Nombre completo"
              name="username"
              autoComplete="username"
              value={data.username}
              onChange={handleInputs}
              autoFocus
            />
            <div className="flex items-center">
              <TextField
                margin="normal"
                required
                fullWidth
                value={password}
                name="password"
                label="Contraseña"
                type="text"
                id="password"
                autoComplete="current-password"
                onChange={handleInputs}
              />
              <Button
                type="button"
                variant="contained"
                onClick={generarContraseña}
                sx={{ backgroundColor: theme.palette.primary.orange }}
              >
                Generar contraseña
              </Button>
            </div>
            <TextField
              margin="normal"
              required
              fullWidth
              name="email"
              label="Email"
              type="email"
              id="email"
              autoComplete="email"
              value={data.email}
              onChange={handleInputs}
            />
            {data.email && !validateEmail(data.email) && (
              <Typography variant="body1" sx={{ color: 'red', textAlign: "center" }}>
                El formato del correo electrónico es inválido
              </Typography>
            )}
            <TextField
              margin="normal"
              required
              fullWidth
              name="date"
              label="Fecha del curso"
              type="date"
              id="date"
              autoComplete="date"
              value={data.date}
              onChange={handleInputs}
            />
            {registrationSuccess && (
              <Typography variant="body1" sx={{ mb: 2, color: 'green', textAlign: "center" }}>
                Usuario registrado exitosamente
              </Typography>
            )}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              className="mt-1 mb-1"
              sx={{ backgroundColor: theme.palette.primary.green }}
            >
              Enviar
            </Button>
          </form>
        </Paper>
      </div>
    </ThemeProvider>
  );
}