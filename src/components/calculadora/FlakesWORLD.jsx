import React, { useState, useEffect, useRef } from 'react';
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Button,
  Typography,
  Select,
  MenuItem,
  TextField
} from '@mui/material';

import flakespartial from "../../assets/partial flake subir.png"
import fullflakes from "../../assets/full flake subir.jpeg"

const FlakesComponentWorld = () => {
  const [squareFeet, setSquareFeet] = useState('');
  const [selectedFlakesOption, setSelectedFlakesOption] = useState(''); // 'Partial Flakes' o 'Full Flakes'
  const [capaProteccion, setCapaProteccion] = useState(''); // 'SI' o 'NO'
  const [showCapaProteccion, setShowCapaProteccion] = useState(false);
  const [resultado, setResultado] = useState('');
  const [resultadoFondo, setResultadoFondo] = useState(" ");
  const [message, setMessage] = useState(" ");
  const [messageFondo, setMessageFondo] = useState(" ");
  const [mostrarResultado, setMostrarResultado] = useState(false);
  const encodedMessage = encodeURIComponent(message);
  const whatsappLink = `https://api.whatsapp.com/send?phone=17869055726&text=${encodedMessage}`;
  const encodedMessageFondo = encodeURIComponent(messageFondo);
  const whatsappLinkFondo = `https://api.whatsapp.com/send?phone=17869055726&text=${encodedMessageFondo}`;
  const resultadosRef = useRef(null);

  const handleSquareFeetChange = (event) => {
    const inputValue = event.target.value;
    const numbersOnly = inputValue.replace(/[^0-9]/g, ''); // Solo permitir números
    setSquareFeet(numbersOnly);
  };
  
  useEffect(() => {
    setCapaProteccion('');
    setShowCapaProteccion(false);
    setMostrarResultado(false);
    setResultado('');
    setResultadoFondo('');
    setMessage('');
    setMessageFondo('');
  }, [selectedFlakesOption]);

  const handleFlakesOptionChange = (event) => {
    setSelectedFlakesOption(event.target.value);
    setCapaProteccion('');
    setShowCapaProteccion(false);
    setMostrarResultado(false);
  };

  const handleHerramientaChange = (event) => {
    const value = event.target.value;
    setShowCapaProteccion(true);
  };

  const handleCapaProteccionChange = (event) => {
    setCapaProteccion(event.target.value);
  };

  const botonWhatsapp = () => {
    if (capaProteccion === "SI"){
      window.location.href = whatsappLinkFondo;
    }
    else if (capaProteccion === "NO"){
      window.location.href = whatsappLink;
    }
  }

  const calcularResultado = () => {
    let cantidad = 0;
    let primer = 0;
    let polyaspartic = 0;
    let proteccion = 0;

    if (selectedFlakesOption === "Partial Flakes"){
      cantidad = Math.ceil((squareFeet * 10.764) * 0.01 * 0.4536 * 100)
      primer = Math.ceil((squareFeet * 10.764) * 0.00769 * 3.785)
      polyaspartic = Math.ceil((squareFeet * 10.764) * 0.01 * 3.785)
      proteccion = Math.ceil((squareFeet * 10.764) * 0.1 * 3.785)

      let resultadoCalculado = (
        <div>
          Para tu proyecto de {squareFeet} metros cuadrados:
          <br />
          Se necesitan {cantidad} gramos de flakes
          <br />
          Se necesitan {primer} litros de epoxy primer WF52
          <br />
          Se necesitan {polyaspartic} litros de polyaspartic
        </div>
      );

      let result = (
        <div>
          Para tu proyecto de {squareFeet} metros cuadrados:
          <br />
          Se necesitan {cantidad} gramos de flakes
          <br />
          Se necesitan {primer} litros de epoxy primer WF52
          <br />
          Se necesitan {polyaspartic} litros de polyaspartic
        </div>
      );

      let mensajito = `Para tu proyecto de ${squareFeet} metros cuadrados: Se necesitan ${cantidad} gramos de flakes, ${primer} litros de epoxy primer WF52, ${polyaspartic} litros de polyaspartic.`;
      let mensajitoProteccion = `Para tu proyecto de ${squareFeet} metros cuadrados: Se necesitan ${cantidad} gramos de flakes, ${primer} litros de epoxy primer WF52, ${polyaspartic} litros de polyaspartic.`

      setResultado(result)
      setResultadoFondo(resultadoCalculado)
      setMessage(mensajito)
      setMessageFondo(mensajitoProteccion)

    }
    else if (selectedFlakesOption === "Full Flakes"){
      cantidad = Math.ceil((squareFeet * 10.764) * 0.167 * 0.4536 * 100)
      primer = Math.ceil((squareFeet * 10.764) * 0.00769 * 3.785)
      polyaspartic = Math.ceil((squareFeet * 10.764) * 0.01 * 3.785)
      proteccion = Math.ceil((squareFeet * 10.764) * 0.002857 * 3.785)

      let resultadoCalculado = (
        <div>
          Para tu proyecto de {squareFeet} metros cuadrados:
          <br />
          Se necesitan {cantidad} gramos de flakes
          <br />
          Se necesitan {primer} litros de epoxy primer WF52
          <br />
          Se necesitan {polyaspartic} litros de polyaspartic
        </div>
      );
  
      let result = (
        <div>
          Para tu proyecto de {squareFeet} metros cuadrados:
          <br />
          Se necesitan {cantidad} gramos de flakes
          <br />
          Se necesitan {primer} litros de epoxy primer WF52
          <br />
          Se necesitan {polyaspartic} litros de polyaspartic
        </div>
      );
  
      let mensajito = `Para tu proyecto de ${squareFeet} metros cuadrados: Se necesitan ${cantidad} gramos de flakes, ${primer} litros de epoxy primer WF52, ${polyaspartic} litros de polyaspartic.`;
      let mensajitoProteccion = `Para tu proyecto de ${squareFeet} metros cuadrados: Se necesitan ${cantidad} gramos de flakes, ${primer} litros de epoxy primer WF52, ${polyaspartic} litros de polyaspartic.`

      setResultado(result)
      setResultadoFondo(resultadoCalculado)
      setMessage(mensajito)
      setMessageFondo(mensajitoProteccion)

      setTimeout(() => {
        resultadosRef.current.scrollIntoView({ behavior: 'smooth' });
      }, 250);
    }
    
  };

  return (
    <div className='min-h-screen flex flex-col items-center py-2'>
        <div className="flex flex-wrap justify-center mt-6">
          <img
            src={flakespartial}
            alt="Partial Flakes"
            className={`w-40 h-40 m-2 cursor-pointer ${
              selectedFlakesOption === 'Partial Flakes' ? 'border-2 border-blue-500' : ''
            }`}
            onClick={() => handleFlakesOptionChange({ target: { value: 'Partial Flakes' } })}
          />
          <img
            src={fullflakes}
            alt="Full Flakes"
            className={`w-40 h-40 m-2 cursor-pointer ${
              selectedFlakesOption === 'Full Flakes' ? 'border-2 border-blue-500' : ''
            }`}
            onClick={() => handleFlakesOptionChange({ target: { value: 'Full Flakes' } })}
          />
        </div>
          
        {selectedFlakesOption && (
        <div className="text-white justify-center mt-4 py-4">
          Has seleccionado: <strong>{selectedFlakesOption}</strong>
        </div>
      )}

      {selectedFlakesOption && (
        <div className='w-full max-w-md px-4 rounded-2xl'>
          <div className="mb-4 rounded-2xl">
        <TextField
          style={{ backgroundColor: 'white' }}
          className='text-white'
          label="Ingresa la cantidad de metros cuadrados"
          type="text"
          value={squareFeet}
          onChange={handleSquareFeetChange}
          variant="outlined"
          inputProps={{
            pattern: "[0-9]*", // Patrón para aceptar solo números
          }}
          fullWidth
        />
      </div>
        </div>
        
      )}

{ squareFeet && (
  <div className="w-full max-w-md px-4">
    <div className="mb-4 rounded-2xl">
            <Typography variant="subtitle1" className='text-white' >
            ¿Deseas agregar una capa de protección?
          </Typography>
          <Select
            style={{ backgroundColor: 'white' }}
            value={capaProteccion}
            onChange={handleCapaProteccionChange}
            variant="outlined"
            displayEmpty
            fullWidth
          >
            <MenuItem value="" disabled>
              ¿Deseas agregar una capa de protección?
            </MenuItem>
            <MenuItem value="SI">SI</MenuItem>
            <MenuItem value="NO">NO</MenuItem>
          </Select>
        </div>
  </div>
          
        )
          
        }

      
    { capaProteccion && (
          <div className='mt-4'>
          <button
            onClick={() => calcularResultado()}
            className="px-6 py-3 bg-blue-500 text-white text-lg rounded-2xl hover:bg-blue-600 items-center justify-center"
          >
            Calcular cantidad necesaria
          </button>
          </div>
          
        )

        }

{resultado && (
        <div className="bg-white rounded-2xl p-4 sm:p-8 max-w-3xl w-full flex flex-col items-center text-center justify-center mt-4" ref={resultadosRef}>
          {capaProteccion === "SI" ? (
            <p>{resultadoFondo}</p>
          ): (
            <p>{resultado}</p>
          )}
        </div>
      )}

    </div>
  );
};

export default FlakesComponentWorld;