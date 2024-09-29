import React, { useState, useRef } from 'react';
import { Select, MenuItem, FormControl, InputLabel, TextField, Typography } from '@mui/material';
import esfumado from "../../assets/Esfumado subir.jpeg"
import marmolado from "../../assets/Marmolado subir.jpeg"
import difuminado from "../../assets/difuminado subir.jpeg"
import liso from "../../assets/Liso subir.jpeg"
import enceldado from "../../assets/enceldado subir.jpg"
import pouring from "../../assets/Pouring subir.jpeg"

const PorcelanatoLiquido = () => {

  const [selectedImageAlt, setSelectedImageAlt] = useState('');
  const [squareFeet, setSquareFeet] = useState('');
  const [porcelanatoSubOption, setPorcelanatoSubOption] = useState('');
  const [cantidadNecesaria, setCantidadNecesaria] = useState('');
  const [efectoNecesario, setEfectoNecesario] = useState('');
  const [baseNecesaria, setBaseNecesaria] = useState('');
  const [cantidadOtroProducto, setCantidadOtroProducto] = useState('');
  const [capaProteccion, setCapaProteccion] = useState('');
  const [primerEpoxico, setPrimerEpoxico] = useState('');
  const [message, setMessage]=useState(" ");
  const [extra, setExtra]=useState(" ");
  const [opcionExtra, setOpcionExtra] = useState(" ")
  const [mensajeHerramientas, setMensajeHerramientas]=useState(" ");
  const encodedMessage = encodeURIComponent(message);
  const whatsappLink = `https://api.whatsapp.com/send?phone=17869055726&text=${encodedMessage}`;
  const resultadosRef = useRef(null);

  const handleSquareFeetChange = (event) => {
    const inputValue = event.target.value;
    const numbersOnly = inputValue.replace(/[^0-9.]/g, ''); // Solo permitir números y el punto decimal
    setSquareFeet(numbersOnly);
  };

  const handleImageClick = (event) => {
    const alt = event.target.alt;
    setSelectedImageAlt(alt);

    const imageOptions = {
      Esfumado: 'esfumado',
      Marmolado: 'marmolado',
      Liso: 'liso',
      Enceldado: 'enceldado',
      Pouring: 'pouring',
      Difuminado: "difuminado"
    };

    const selectedOption = imageOptions[alt] || '';
    setPorcelanatoSubOption(selectedOption);

    setSquareFeet('');
    setCantidadNecesaria('');
    setCantidadOtroProducto('');
    setCapaProteccion('');
    setPrimerEpoxico('');
    setOpcionExtra(" ");
  };

  const handleExtraChange = (event) => {
    const extraop = event.target.value;
    setOpcionExtra(extraop)
  }

  const calcularCantidadNecesaria = () => {
    let cantidad = 0;
    let efecto = 0;
    let base = 0;
    let extrita = 0;

    if (porcelanatoSubOption === 'pouring') {
      cantidad = Math.ceil(squareFeet * 0.05);
      efecto = Math.ceil(cantidad * 0.75);
      extrita = Math.ceil(cantidad * 0.15);
    } else if (porcelanatoSubOption === 'marmolado') {
      cantidad = Math.ceil(squareFeet * 0.016667);
      base = Math.ceil(cantidad * 0.1);
      extrita = Math.ceil(cantidad * 0.15);
    } else if (porcelanatoSubOption === 'difuminado') {
      cantidad = Math.ceil(squareFeet * 0.016667);
      efecto = Math.ceil(cantidad * 0.5);
      extrita = Math.ceil(cantidad * 0.15);
    } else if (porcelanatoSubOption === 'enceldado' || porcelanatoSubOption === 'esfumado') {
      cantidad = Math.ceil(squareFeet * 0.016667);
      base = Math.ceil(cantidad * 0.333);
      extrita = Math.ceil(cantidad * 0.15);
    } else if (porcelanatoSubOption === 'liso') {
      cantidad = Math.ceil(squareFeet * 0.016667);
      extrita = Math.ceil(cantidad * 0.15);
    }


    // Calcular cantidad necesaria del otro producto
    let cantidadOtro = '';
    let capa = (squareFeet * 0.0041666666666667).toFixed(2);
    let primer = (squareFeet * 0.00769).toFixed(2);
    let mensajeprimer = `${primer} galones de Epoxy Primer WF52`;

    if (porcelanatoSubOption === 'esfumado' || porcelanatoSubOption === 'enceldado') {
      const cantidad100 = Math.ceil(cantidad * 0.1);
      cantidadOtro = `Se necesitan ${Math.ceil(cantidad100  * 128)} onzas de Epoxy Tint`;
    } else if (porcelanatoSubOption === 'marmolado') {
      const cantidad85 = Math.ceil(cantidad * 0.85);
      const cantidad15 = Math.ceil(cantidad * 0.15);
      cantidadOtro = `Se necesitan ${Math.ceil(cantidad85 * 0.1 * 128)} onzas de pigmento de color primario y ${Math.ceil(cantidad15 * 0.04 * 128)} onzas de carga metálica de color secundario`;
    } else if (porcelanatoSubOption === "difuminado"){
      const cantidad100 = Math.ceil(cantidad * 0.0166);
      cantidadOtro = `Se necesitan ${Math.ceil(cantidad100 * 0.5 * 128)} onzas para el pigmento`
    } else if (porcelanatoSubOption === 'liso') {
      const cantidad10 = Math.ceil(cantidad * 0.1);
      const cantidad4 = Math.ceil(cantidad * 0.04);
      cantidadOtro = `En este puedes elegir la opción que más te guste. Si eliges pigmento, se necesitan ${Math.ceil(cantidad10 * 128)} onzas de pigmento y si prefieres carga metálica, necesitarás ${(cantidad4 * 128)} onzas de carga metálica`;
    } else if (porcelanatoSubOption === 'pouring') {
      const cantidad4 = (cantidad * 0.04);
      cantidadOtro = `Se necesitan ${Math.ceil(cantidad4 * 128)} onzas de carga metálica`;
    }

    setCantidadOtroProducto(cantidadOtro);
    setPrimerEpoxico(mensajeprimer);
    setCantidadNecesaria(cantidad);
    setEfectoNecesario(efecto);
    setBaseNecesaria(base);
    setExtra(extrita)

    let mensajito = `Para mi proyecto de ${squareFeet} sqft, necesito ${cantidad} galones de resina, ${efecto} galones para el efecto y ${base} galones para la base. ${cantidadOtro}, ${mensajeprimer}. ${mensajeHerramientas}. ¿Me puedes ayudar?`
    setMessage(mensajito)

    setTimeout(() => {
      resultadosRef.current.scrollIntoView({ behavior: 'smooth' });
    }, 250);
    
  };

  const botonWhatsapp = () => {
    window.location.href = whatsappLink;
  }

  const images = [
    { src: esfumado, alt: 'Esfumado' },
    { src: marmolado, alt: 'Marmolado' },
    { src: difuminado, alt: 'Difuminado' },
    { src: liso, alt: 'Liso' },
    { src: enceldado, alt: 'Enceldado' },
    { src: pouring, alt: 'Pouring' },
  ];
  
  return (
    <div className="min-h-screen flex flex-col items-center py-2">
      <div>
        
      </div>
      <div className="flex flex-wrap justify-center mt-6">
        {images.map((image) => (
          <img
            key={image.alt}
            src={image.src}
            alt={image.alt}
            className={`w-40 h-40 m-2 cursor-pointer ${
              selectedImageAlt === image.alt ? 'border-2 border-blue-500' : ''
            }`}
            onClick={handleImageClick}
          />
        ))}
      </div>

      {selectedImageAlt && (
        <div className="text-white justify-center mt-4 py-4">
          Has seleccionado: <strong>{selectedImageAlt}</strong>
        </div>
      )}

      {selectedImageAlt && (
        <div className="w-full max-w-md px-4 rounded-2xl">
          <div className="mb-4 rounded-2xl">
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
        </div>
      )}


      {squareFeet && (
        <div className="w-full max-w-md px-4">
          <div className="mb-4">
        <Typography variant="subtitle1" className='text-white' >
        ¿Deseas agregar un 15% extra como reserva?
      </Typography>
      <Select
        style={{ backgroundColor: 'white' }}
        value={opcionExtra}
        onChange={handleExtraChange}
        variant="outlined"
        displayEmpty
        fullWidth
      >
        <MenuItem value="" disabled>
          ¿Deseas agregar un 15% extra como reserva?
        </MenuItem>
        <MenuItem value="SI">SI</MenuItem>
        <MenuItem value="NO">NO</MenuItem>
      </Select>
    </div>
        </div>
        
      )

      }

      {(opcionExtra === "SI" || opcionExtra === "NO")  && (
        <div className="mt-4">
          <button
            onClick={() => calcularCantidadNecesaria()}
            className="px-6 py-3 bg-blue-500 text-white text-lg rounded-2xl hover:bg-blue-600"
          >
            Calcular cantidad necesaria
          </button>
        </div>
      )}

      {cantidadNecesaria && (

        <div className="bg-white rounded-2xl p-4 sm:p-8 max-w-3xl w-full flex flex-col items-center text-center justify-center mt-4" ref={resultadosRef}>
          
          <p>Para tu proyecto de {squareFeet} square feet: </p>
          <p>Se necesitan {cantidadNecesaria} galones de resina</p>
          {opcionExtra === "SI" ? (
            <p>Tu extra de resina sería: {extra} galones</p>
          ):(
            <>
            </>
          )
          }
          {baseNecesaria.length > 0 ? (
            <p>Base necesaria: {baseNecesaria} galones</p>
          ):(
            <>
            </>
          )
          }
          {efectoNecesario.length > 0 ? (
            <p>Usaremos {efectoNecesario} galones más para el efecto</p>
          ):(
            <>
            </>
          )
          }
          <p>{mensajeHerramientas}</p>
          <p>{cantidadOtroProducto}</p>
          <p>{capaProteccion}</p>
          <p>{primerEpoxico}</p>
        </div>
      )}

      {primerEpoxico && <div className="mt-4">
        <button
            onClick={() => botonWhatsapp()}
            className="px-6 py-3 bg-red-600 text-white text-lg rounded-2xl hover:bg-red-700"
          >
            Consulta tu presupuesto
          </button>
          </div>}

    </div>
  );
};

export default PorcelanatoLiquido;