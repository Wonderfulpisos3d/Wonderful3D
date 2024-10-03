import React, { useState, useEffect } from "react";
import {
  Button,
  TextField,
  Paper,
  Box,
  Typography,
  Select,
  MenuItem,
  InputLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormControl,
  Autocomplete,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import firebaseApp from "../firebaseConfig";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import MicIcon from "@mui/icons-material/Mic";
import { SanJose } from "../Data";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import UpcomingCity from "./UpcomingCity";

export default function AdminPage() {
  const Vacio = [];
  const [user, setUser] = useState(null);
  const [responsables, setResponsables] = useState(" ");
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const MySwal = withReactContent(Swal);
  const [inscriptos, setInscriptos] = useState("");
  const [price, setPrice] = useState("");

  const recognition = new (window.SpeechRecognition ||
    window.webkitSpeechRecognition)();
  recognition.continuous = false; // Detener después de cada frase
  recognition.lang = "es-ES"; // Ajusta el idioma según tus necesidades

  recognition.onstart = () => {
    setIsListening(true);
  };

  recognition.onresult = (event) => {
    const speechResult = event.results[0][0].transcript;
    setTranscript(speechResult);
    setData((prevData) => ({
      ...prevData,
      username: speechResult,
    }));
  };

  recognition.onend = () => {
    setIsListening(false);
  };

  const toggleRecognition = () => {
    if (isListening) {
      recognition.stop();
    } else {
      recognition.start();
    }
  };

  const handleManualEdit = (event) => {
    setData({ ...data, username: event.target.value });
  };

  const generarContraseña = () => {
    const caracteres =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let nuevaContraseña = "";

    for (let i = 0; i < 8; i++) {
      nuevaContraseña += caracteres.charAt(
        Math.floor(Math.random() * caracteres.length)
      );
    }

    return nuevaContraseña;
  };

  const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const getCurrentDate3 = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    return `${month}-${day}-${year}`;
  };

  const getCurrentDate2 = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    return `${day}/${month}/24`;
  };

  const auth = getAuth(firebaseApp);

  const cities = ["Barcelona", "Mexico City", "Minneapolis"];

  const updateResponsableIfNeeded = () => {
    if (
      localStorage.usuario ===
        '{"uid":"Rc02Ox3ppcSIhV5rP47z48aMDog1","email":"danterreno@hotmail.com","role":"admin","city":"online","username":"Dante"}' ||
      localStorage.usuario ===
        '{"uid":"M45ZPc6wnFRFCQizeMOVTpZsQII2","email":"jmzalazar73@gmail.com","role":"admin","city":"online","username":"Marcelo Zalazar"}'
    ) {
      return "Dante Terreno";
    } else if (
      localStorage.usuario ===
        '{"uid":"7SHzpXhtZTMn5wZiuuDK4ri7yEI3","email":"francoterreno64@gmail.com","role":"admin","city":"online","username":"Franco Terreno"}' ||
      localStorage.usuario ===
        '{"uid":"nJvxZ3RXGVdgCqsun3Mm7WIKHfm1","email":"gabrcebs1973@gmail.com","role":"admin","city":"online","username":"Gabriel"}'
    ) {
      return "Franco Terreno";
    } else if (
      localStorage.usuario ===
      '{"uid":"Hmw31wvlKxeiWcptjE5VGamDm3H3","email":"oneynon2011@gmail.com","role":"admin","city":"online","username":"Martín Zuniga"}'
    ) {
      return "Martín Zuniga";
    } else {
      return "admin";
    }
  };

  const updateCityIfNeeded = () => {
    if (
      localStorage.usuario ===
        '{"uid":"Rc02Ox3ppcSIhV5rP47z48aMDog1","email":"danterreno@hotmail.com","role":"admin","city":"online","username":"Dante"}' ||
      localStorage.usuario ===
        '{"uid":"M45ZPc6wnFRFCQizeMOVTpZsQII2","email":"jmzalazar73@gmail.com","role":"admin","city":"online","username":"Marcelo Zalazar"}'
    ) {
      return "Barcelona";
    } else if (
      localStorage.usuario ===
        '{"uid":"7SHzpXhtZTMn5wZiuuDK4ri7yEI3","email":"francoterreno64@gmail.com","role":"admin","city":"online","username":"Franco Terreno"}' ||
      localStorage.usuario ===
        '{"uid":"nJvxZ3RXGVdgCqsun3Mm7WIKHfm1","email":"gabrcebs1973@gmail.com","role":"admin","city":"online","username":"Gabriel"}'
    ) {
      return "Mexico City";
    } else if (
      localStorage.usuario ===
      '{"uid":"Hmw31wvlKxeiWcptjE5VGamDm3H3","email":"oneynon2011@gmail.com","role":"admin","city":"online","username":"Martín Zuniga"}'
    ) {
      return "Minneapolis";
    } else {
      return "city";
    }
  };

  const updateOrigen = () => {
    if (
      localStorage.usuario ===
        '{"uid":"Rc02Ox3ppcSIhV5rP47z48aMDog1","email":"danterreno@hotmail.com","role":"admin","city":"online","username":"Dante"}' ||
      localStorage.usuario ===
        '{"uid":"M45ZPc6wnFRFCQizeMOVTpZsQII2","email":"jmzalazar73@gmail.com","role":"admin","city":"online","username":"Marcelo Zalazar"}'
    ) {
      return "Barcelona";
    } else if (
      localStorage.usuario ===
        '{"uid":"7SHzpXhtZTMn5wZiuuDK4ri7yEI3","email":"francoterreno64@gmail.com","role":"admin","city":"online","username":"Franco Terreno"}' ||
      localStorage.usuario ===
        '{"uid":"nJvxZ3RXGVdgCqsun3Mm7WIKHfm1","email":"gabrcebs1973@gmail.com","role":"admin","city":"online","username":"Gabriel"}'
    ) {
      return "Mexico City";
    } else if (
      localStorage.usuario ===
      '{"uid":"Hmw31wvlKxeiWcptjE5VGamDm3H3","email":"oneynon2011@gmail.com","role":"admin","city":"online","username":"Martín Zuniga"}'
    ) {
      return "Minneapolis";
    } else {
      return "city";
    }
  };

  // const allowedUsernamesEquipo1 = [
  //   // '{"uid":"Hmw31wvlKxeiWcptjE5VGamDm3H3","email":"oneynon2011@gmail.com","role":"admin","city":"online","username":"Martín Zuniga"}',
  //   '{"uid":"0yFrs3UiyqbdeF0lmdJBiP4J2v22","email":"claudioignaciomontiel@gmail.com","role":"admin","city":"online","username":"Claudio"}',
  // ];

  const allowedUsernamesEquipo1 = [
    '{"uid":"Rc02Ox3ppcSIhV5rP47z48aMDog1","email":"danterreno@hotmail.com","role":"admin","city":"online","username":"Dante"}',
    '{"uid":"M45ZPc6wnFRFCQizeMOVTpZsQII2","email":"jmzalazar73@gmail.com","role":"admin","city":"online","username":"Marcelo Zalazar"}',
  ];

  const allowedUsernamesEquipo2 = [
    '{"uid":"7SHzpXhtZTMn5wZiuuDK4ri7yEI3","email":"francoterreno64@gmail.com","role":"admin","city":"online","username":"Franco Terreno"}',
    '{"uid":"nJvxZ3RXGVdgCqsun3Mm7WIKHfm1","email":"gabrcebs1973@gmail.com","role":"admin","city":"online","username":"Gabriel"}',
  ];

  const allowedUsernamesEquipo3 = [
    // '{"uid":"Rc02Ox3ppcSIhV5rP47z48aMDog1","email":"danterreno@hotmail.com","role":"admin","city":"online","username":"Dante"}',
    '{"uid":"Hmw31wvlKxeiWcptjE5VGamDm3H3","email":"oneynon2011@gmail.com","role":"admin","city":"online","username":"Martín Zuniga"}',
  ];
  // const allowedUsernamesEquipo4 = [
  //   '{"uid":"7SHzpXhtZTMn5wZiuuDK4ri7yEI3","email":"francoterreno64@gmail.com","role":"admin","city":"online","username":"Franco Terreno"}',
  //   '{"uid":"M45ZPc6wnFRFCQizeMOVTpZsQII2","email":"jmzalazar73@gmail.com","role":"admin","city":"online","username":"Marcelo Zalazar"}',
  // ];

  // const allowedUsernamesEquipo5 = [
  //   '{"uid":"PYjAb8D1xDU8GOna3VNvei4hRuR2","email":"maximilianodanielarq@gmail.com","role":"admin","city":"online","username":"Maximiliano Daniel"}',
  //   '{"uid":"Rc02Ox3ppcSIhV5rP47z48aMDog1","email":"danterreno@hotmail.com","role":"admin","city":"online","username":"Dante"}',
  // ];

  const showAutocompleteEquipo1 = allowedUsernamesEquipo1.includes(
    localStorage.usuario
  );
  const showAutocompleteEquipo2 = allowedUsernamesEquipo2.includes(
    localStorage.usuario
  );
  const showAutocompleteEquipo3 = allowedUsernamesEquipo3.includes(
    localStorage.usuario
  );
  // const showAutocompleteEquipo4 = allowedUsernamesEquipo4.includes(
  //   localStorage.usuario
  // );
  // const showAutocompleteEquipo5 = allowedUsernamesEquipo5.includes(
  //   localStorage.usuario
  // );
  const [isDarkModeOn, setIsDarkModeOn] = useState(false);
  const [password, setPassword] = useState("");

  const [data, setData] = useState({
    username: "",
    email: "",
    password: generarContraseña(),
    city: updateCityIfNeeded(),
    rol: "user",
    responsable: updateResponsableIfNeeded(),
    date: getCurrentDate(),
    paymentMethod: "",
    phone: "",
    fechacampaña: getCurrentDate2(),
    fechacertificado: getCurrentDate3(),
    selectedOptionIndex: -1,
    key1: generarContraseña(),
    key2: generarContraseña(),
    origen: updateOrigen(),
  });
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [error, setError] = useState(null);

  const [selectedName, setSelectedName] = useState("");
  const [selectedEmail, setSelectedEmail] = useState("");
  const [selectedPhone, setSelectedPhone] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        let url;
        if (showAutocompleteEquipo1) {
          url = `https://opensheet.elk.sh/16dK63efNIhXABO3uLuFKWuvguH_N29Q6_pLBhiSwVcY/Plataforma`;
        } else if (showAutocompleteEquipo2) {
          url = `https://opensheet.elk.sh/17CGQyACZYzq1-xvl6Jot5JdIf3cKiJTlctKT6XQ96r8/Plataforma`;
        } else if (showAutocompleteEquipo3) {
          url = `https://opensheet.elk.sh/1XTYNJp-dHys_tyvidSOYPlh7XF82njC9UA4e8LBRm3I/Plataforma`;
        } else {
          url = `https://opensheet.elk.sh/16dK63efNIhXABO3uLuFKWuvguH_N29Q6_pLBhiSwVcY/Plataforma`;
        }
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(
            `Error al obtener datos. Código de estado: ${response.status}`
          );
        }
        const responseData = await response.json();
        setInscriptos(
          Object.values(responseData).map((inscrito) => {
            if (inscrito.email === undefined) {
              inscrito.email = "NO TIENE MAIL";
            }
            return inscrito;
          })
        );
      } catch (error) {
        console.error("Error al obtener datos de la API:", error.message);
      }
    }

    fetchData();
  }, []);

  console.log(inscriptos);

  const handleNameChange = (event, newValue) => {
    setSelectedName(newValue);

    // Buscar el email y el teléfono correspondientes al nombre seleccionado
    const selectedEntry = inscriptos.find((entry) => entry.nombre === newValue);
    if (selectedEntry) {
      setSelectedEmail(selectedEntry.email);
      setSelectedPhone(selectedEntry.phone);
    } else {
      setSelectedEmail("");
      setSelectedPhone("");
    }
  };

  const handleEmailChange = (event) => {
    setSelectedEmail(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setSelectedPhone(event.target.value);
  };

  const handleFirstAutocompleteChange = (ciudad) => (event, newValue) => {
    const selectedOptionIndex = ciudad.findIndex(
      (option) => option.name === newValue
    );
    setData((prevData) => ({
      ...prevData,
      username: newValue,
      selectedOptionIndex,
    }));
  };

  const handleInputs = (event) => {
    let inputs = { [event.target.name]: event.target.value };

    setData((prevData) => ({
      ...prevData,
      ...inputs,
    }));
  };

  const handlePaymentMethodChange = (event) => {
    const selectedMethod = event.target.value;

    // Actualiza el método de pago en el estado
    setData((prevData) => ({
      ...prevData,
      paymentMethod: selectedMethod,
    }));

    // Concatenar solo si el precio ya está seleccionado
    if (price) {
      setData((prevData) => ({
        ...prevData,
        paymentMethod: `${selectedMethod} - $${price}`,
      }));
    }
  };

  const handlePriceChange = (event) => {
    const selectedPrice = event.target.value;
    setPrice(selectedPrice);

    // Concatenar solo si el método de pago ya está seleccionado
    if (data.paymentMethod) {
      setData((prevData) => ({
        ...prevData,
        paymentMethod: `${prevData.paymentMethod} - $${selectedPrice}`,
      }));
    }
  };

  const theme = createTheme({
    palette: {
      mode: isDarkModeOn ? "dark" : "light",
      primary: {
        main: "#8A2BE2",
        green: "#1cad1c",
        orange: "#f54f02",
      },
    },
  });

  const envioCorrecto = () => {
    MySwal.fire({
      title: "Registro Exitoso",
      text: `${data.username} HA SIDO REGISTRADO EXITOSAMENTE. Presione aceptar para continuar`,
      icon: "success",
      confirmButtonText: "Aceptar",
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validar campos
    if (!validateEmail(data.email)) {
      setError("El formato del correo electrónico es inválido");
      return;
    }

    try {
      // Envía la información al backend
      const response = await fetch(
        "https://us-central1-fir-proyect-7e9ea.cloudfunctions.net/registerUser",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        envioCorrecto();
        setRegistrationSuccess(true);
        setPrice("");
        setPassword("");
        setData({
          username: "",
          email: "",
          password: generarContraseña(),
          city: updateCityIfNeeded(),
          rol: "user",
          date: getCurrentDate(),
          paymentmethod: "Cash",
          responsable: updateResponsableIfNeeded(),
          phone: "",
          fechacampaña: getCurrentDate2(),
          fechacertificado: getCurrentDate3(),
          selectedOptionIndex: -1,
          key1: generarContraseña(),
          key2: generarContraseña(),
          origen: updateOrigen(),
        });
        setError(null);
      } else {
        const errorMessage = await response.text();
        setError(errorMessage);
        MySwal.fire({
          title: "Oops...",
          text: `No se pudo registrar a este usuario. ${errorMessage}`,
          icon: "error",
          confirmButtonText: "Reintentar",
        });
      }
    } catch (error) {
      setError("Error al comunicarse con el servidor");
    }
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
      <div className="flex flex-col justify-center items-center min-h-screen bg-#8A2BE2-800">
        <UpcomingCity
          equipo1={showAutocompleteEquipo1}
          equipo2={showAutocompleteEquipo2}
          equipo3={showAutocompleteEquipo3}
          cities={cities}
        />
        <Paper className="flex flex-col w-full max-w-lg p-8">
          <div className="flex justify-between w-full">
            <Typography component="h1" variant="h5">
              Asistencias
            </Typography>
          </div>
          <form className="mt-2 w-full" onSubmit={handleSubmit}>
            {inscriptos.length > 0 ? (
              <div>
                <Autocomplete
                  id="free-solo-demo"
                  margin="normal"
                  freeSolo
                  required
                  fullWidth
                  options={inscriptos.map((option) => option.nombre)}
                  value={selectedName}
                  onChange={handleNameChange}
                  onInputChange={(event, newValue) =>
                    setData((prevData) => ({
                      ...prevData,
                      username: newValue,
                    }))
                  }
                  renderOption={(props, option) => {
                    const selectedUser = inscriptos.find(
                      (user) => user.nombre === option
                    );
                    return (
                      <li
                        {...props}
                        style={{
                          color:
                            selectedUser.discount === "TRUE"
                              ? "red"
                              : selectedUser.discount === "Corporatativo"
                              ? "blue"
                              : "black",
                        }}
                      >
                        {option}
                      </li>
                    );
                  }}
                  renderInput={(params) => (
                    <TextField {...params} label="Nombre completo" />
                  )}
                  style={{ marginTop: "16px", marginBottom: "16px" }}
                />
                <Autocomplete
                  id="free-solo-demo"
                  margin="normal"
                  freeSolo
                  required
                  fullWidth
                  options={inscriptos.map((option) => option.email)}
                  value={selectedEmail}
                  onInputChange={(event, newValue) =>
                    setData((prevData) => ({
                      ...prevData,
                      email: newValue,
                    }))
                  }
                  renderInput={(params) => (
                    <TextField {...params} label="Correo Electrónico" />
                  )}
                  style={{ marginTop: "16px", marginBottom: "16px" }}
                />
                {data.email && !validateEmail(data.email) && (
                  <Typography
                    variant="body1"
                    sx={{ color: "red", textAlign: "center" }}
                  >
                    El formato del correo electrónico es inválido
                  </Typography>
                )}
                <Autocomplete
                  id="free-solo-demo"
                  margin="normal"
                  freeSolo
                  required
                  fullWidth
                  options={inscriptos.map((option) => option.phone)}
                  value={selectedPhone}
                  onInputChange={(event, newValue) =>
                    setData((prevData) => ({
                      ...prevData,
                      phone: newValue,
                    }))
                  }
                  renderInput={(params) => (
                    <TextField {...params} label="Teléfono" />
                  )}
                  style={{ marginTop: "16px", marginBottom: "16px" }}
                />
              </div>
            ) : (
              <div>
                <Autocomplete
                  id="free-solo-demo"
                  margin="normal"
                  freeSolo
                  required
                  fullWidth
                  options={Vacio.map((option) => option.name)}
                  onInputChange={handleFirstAutocompleteChange(Vacio)}
                  renderInput={(params) => (
                    <TextField {...params} label="Nombre completo" />
                  )}
                  style={{ marginTop: "16px", marginBottom: "16px" }}
                />
                <Autocomplete
                  id="free-solo-demo"
                  margin="normal"
                  key={data.key1}
                  freeSolo
                  required
                  fullWidth
                  options={Vacio.map((option) => option.email)}
                  value={
                    data.selectedOptionIndex === -1
                      ? ""
                      : Vacio[data.selectedOptionIndex].email
                  }
                  onInputChange={(event, newValue) =>
                    setData((prevData) => ({
                      ...prevData,
                      email: newValue,
                    }))
                  }
                  renderInput={(params) => (
                    <TextField {...params} label="Correo Electrónico" />
                  )}
                  style={{ marginTop: "16px", marginBottom: "16px" }}
                />
                {data.email && !validateEmail(data.email) && (
                  <Typography
                    variant="body1"
                    sx={{ color: "red", textAlign: "center" }}
                  >
                    El formato del correo electrónico es inválido
                  </Typography>
                )}
                <Autocomplete
                  id="free-solo-demo"
                  margin="normal"
                  freeSolo
                  required
                  fullWidth
                  key={data.key2}
                  options={Vacio.map((option) => option.phone)}
                  value={
                    data.selectedOptionIndex !== -1
                      ? Vacio[data.selectedOptionIndex].phone
                      : ""
                  }
                  onInputChange={(event, newValue) =>
                    setData((prevData) => ({
                      ...prevData,
                      phone: newValue,
                    }))
                  }
                  renderInput={(params) => (
                    <TextField {...params} label="Teléfono" />
                  )}
                  style={{ marginTop: "16px", marginBottom: "16px" }}
                />
              </div>
            )}
            <Box marginY={2}>
              <Typography component="label" htmlFor="payment-method">
                Método de Pago
              </Typography>
              <RadioGroup
                id="payment-method"
                value={
                  data.paymentMethod ? data.paymentMethod.split(" - ")[0] : ""
                }
                // Muestra solo el método de pago sin el precio
                onChange={handlePaymentMethodChange}
                style={{ display: "flex", flexDirection: "row" }}
              >
                <FormControlLabel
                  value="Cash"
                  control={<Radio />}
                  label="Cash"
                />
                <FormControlLabel
                  value="Card"
                  control={<Radio />}
                  label="Card"
                />
              </RadioGroup>

              <FormControl sx={{ minWidth: 120, marginLeft: 2 }}>
                <InputLabel id="select-price-label">Precio</InputLabel>
                <Select
                  labelId="select-price-label"
                  id="select-price"
                  value={price}
                  onChange={handlePriceChange}
                >
                  <MenuItem value={299}>$299</MenuItem>
                  <MenuItem value={599}>$599</MenuItem>
                </Select>
              </FormControl>
            </Box>
            {error && (
              <Typography
                variant="body1"
                sx={{ color: "red", textAlign: "center" }}
              >
                {error}
              </Typography>
            )}
            {registrationSuccess && (
              <Typography
                variant="body1"
                sx={{ mb: 2, color: "green", textAlign: "center" }}
              >
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
