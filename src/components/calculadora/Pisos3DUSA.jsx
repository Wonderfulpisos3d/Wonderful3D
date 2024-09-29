import React, { useState, useRef } from 'react';
import { TextField, Select, MenuItem, Button, Typography } from '@mui/material';

const Pisos3D = () => {
  const [squareFeet, setSquareFeet] = useState('');
  const [colorFondo, setColorFondo] = useState(''); // 'SI' o 'NO'
  const [resultado, setResultado] = useState('');
  const [resultadoFondo, setResultadoFondo] = useState(" ");
  const [message, setMessage] = useState(" ");
  const [messageFondo, setMessageFondo] = useState(" ")
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

  const botonWhatsapp = () => {
    if (colorFondo === "SI"){
      window.location.href = whatsappLinkFondo;
    }
    else if (colorFondo === "NO"){
      window.location.href = whatsappLink;
    }
  }

  const handleColorFondoChange = (event) => {
    const value = event.target.value;
    setColorFondo(value);
  };


  const calcularResultado = () => {
    let cantidad=0;
    let cantidadcolor = 0;
    // Lógica para calcular el resultado según las opciones seleccionadas
    cantidad = Math.ceil(squareFeet * 0.016667);
    cantidadcolor = Math.ceil(cantidad * 0.1);
    let cantidadvinilo = Math.ceil(squareFeet * 0.1);
    // Aquí puedes poner la lógica específica para el cálculo de los pisos 3D
    // Por ejemplo, podrías hacer diferentes cálculos en base a los valores seleccionados
    let resultadoCalculado = (
      <div>
        Para tu proyecto de {squareFeet} square feet:
        <br />
        Se necesitan {cantidad} galones de resina
        <br />
        Necesitas {cantidadvinilo} square feet de vinilo
      </div>
    );

    let mensajito = `Para tu proyecto de ${squareFeet} square feet: Se necesitan ${cantidad} galones de resina, se necesitan ${cantidadvinilo} square feet de vinilo`
    let mensajitoColor = `Para tu proyecto de ${squareFeet} square feet: Se necesitan ${cantidad} galones de resina y de color de fondo, necesitarás ${cantidadcolor} galones de resina, se necesitan ${cantidadvinilo} square feet de vinilo`

    let result = (
      <div>
        Para tu proyecto de {squareFeet} square feet:
        <br />
        Se necesitan {cantidad} galones de resina
        <br />
        Necesitas {cantidadvinilo} square feet de vinilo
        <br />
        De color de fondo, necesitarás {cantidadcolor} galones de resina
      </div>
    );
    
    setResultado(resultadoCalculado);
    setResultadoFondo (result);
    setMessage (mensajito);
    setMessageFondo(mensajitoColor);
    setTimeout(() => {
      resultadosRef.current.scrollIntoView({ behavior: 'smooth' });
    }, 100);
    
  };

  return (
    <div className="min-h-screen flex flex-col items-center py-4">
      <div className="w-full max-w-md px-4 items-center ">
        <div className="mb-4">
          <TextField
            style={{ backgroundColor: 'white' }}
            className='text-white'
            label="Ingresa la cantidad de pies cuadrados"
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
        { squareFeet && (
          <div className="mb-4">
            <Typography variant="subtitle1" className='text-white' >
            ¿Deseas agregar un color de fondo?
          </Typography>
          <Select
            style={{ backgroundColor: 'white' }}
            value={colorFondo}
            onChange={handleColorFondoChange}
            variant="outlined"
            displayEmpty
            fullWidth
          >
            <MenuItem value="" disabled>
              ¿Deseas agregar un color de fondo?
            </MenuItem>
            <MenuItem value="SI">SI</MenuItem>
            <MenuItem value="NO">NO</MenuItem>
          </Select>
        </div>
        )
          
        }
        
      </div>
      { colorFondo && (
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
          {colorFondo === "SI" ? (
            <p>{resultadoFondo}</p>
          ): (
            <p>{resultado}</p>
          )}
        </div>
      )}

      {resultado && (
        <div className='mt-4'>
          <button
        onClick={() => botonWhatsapp()}
        className="px-6 py-3 bg-red-600 text-white text-lg rounded-2xl hover:bg-red-700"
      >
        Consulta tu presupuesto
      </button>
        </div>
        
      )
      }

    </div>
  );
};

export default Pisos3D;