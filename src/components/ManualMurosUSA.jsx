import React from 'react';
import { useMediaQuery } from 'react-responsive';
import Volver from './Volver';

function Manualcito() {
  return (
    <div className="text-center min-h-screen flex flex-col justify-center">
      <div className="">
        <Volver> </Volver>
      </div>
      <div className="flex-grow flex justify-center items-center">
        <embed src="https://drive.google.com/file/d/13N-QCltBNFREhNF2wWbOkz2EHVmu4WiS/preview" page="" width="100%" height="680px"></embed>
      </div>
      <div className="">
        <Volver> </Volver>
      </div>
      <div className="flex-grow"></div>
    </div>
  );
}

function CalameoViewer() {
  return (
    <div className="text-center">
      <Volver> </Volver>
      <div className="my-4">
      </div>
      <div className="flex justify-center">
      <iframe src="https://drive.google.com/file/d/13N-QCltBNFREhNF2wWbOkz2EHVmu4WiS/preview" width="100%" height="680px"></iframe>
      </div>
      <div className="my-4">
      </div>
      <Volver> </Volver>
    </div>
  );
}

function ManualMurosUSA() {
  const esDispositivoMayorResolucion = useMediaQuery({minWidth: 720});

  return (
    <div>
      {esDispositivoMayorResolucion ? (
        <Manualcito />
      ) : (
        <CalameoViewer />
      )}
    </div>
  );
}

export default ManualMurosUSA;
