import React, { useState, useRef } from 'react';
import PorcelanatoLiquido from './PorcelanatoWORLD';
import Pisos3D from './Pisos3DWorld';
import FlakesComponent from './FlakesWORLD';
import WhatsAppButton from '../WhatsappIcon';

export default function Productos() {
  const [opcionElegida, setOpcionElegida] = useState('');
  const [porcelanatoState,setPorcelanatoState] = useState({
    selectedImageAlt: '',
    squareFeet: '',
    porcelanatoSubOption: '',
    selectedHerramientas: [],
    cantidadNecesaria: '',
    efectoNecesario: '',
    baseNecesaria: '',
    cantidadOtroProducto: '',
    capaProteccion: '',
    primerEpoxico: '',
  })

  const handleOpcionChange = (opcion) => {
    setOpcionElegida(opcion);

    if (opcion === "Pisos 3D"){}
    else if (opcion === "Flakes"){

    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center">
      <h1 className="text-3xl mb-4 text-white">Comencemos...</h1>
      <div className="flex flex-wrap space-x-4 justify-center">
  <button
    className={`${
      opcionElegida === 'Porcelanato Líquido' ? 'bg-blue-500' : 'bg-blue-300'
    } px-5 py-2 rounded text-white text-lg mb-2 md:mb-0 md:w-auto`}
    onClick={() => handleOpcionChange('Porcelanato Líquido')}
  >
    Porcelanato Líquido
  </button>
  <button
    className={`${
      opcionElegida === 'Pisos 3D' ? 'bg-violet-700' : 'bg-violet-800'
    } px-5 py-2 rounded text-white text-lg mb-2 md:mb-0 md:w-auto`}
    onClick={() => handleOpcionChange('Pisos 3D')}
  >
    Pisos 3D
  </button>
  <button
    className={`${
      opcionElegida === 'Flakes' ? 'bg-purple-700' : 'bg-purple-800'
    } px-5 py-2 rounded text-white mb-2 text-lg md:mb-0 md:w-auto`}
    onClick={() => handleOpcionChange('Flakes')}
  >
    Flakes
  </button>
</div>

      <div className="w-full max-w-3x1">
        {/* Renderizado del componente especial según la opción elegida */}
        {opcionElegida === 'Porcelanato Líquido' && <PorcelanatoLiquido />}
        {opcionElegida === 'Pisos 3D' && <Pisos3D />}
        {opcionElegida === 'Flakes' && <FlakesComponent />}
      </div>
    </div>
  );
}