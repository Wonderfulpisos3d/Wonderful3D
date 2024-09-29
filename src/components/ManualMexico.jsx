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
        <embed src="https://docs.google.com/viewer?srcid=14o6U9lEh52ap8WlgV4rbGLYrhYAht1IG&pid=explorer&efh=false&a=v&chrome=false&embedded=true&chrome=false&scrolling=auto&spread=2" page="" width="100%" height="680px"></embed>
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
      <iframe src="https://docs.google.com/viewer?srcid=14o6U9lEh52ap8WlgV4rbGLYrhYAht1IG&pid=explorer&efh=false&a=v&chrome=false&embedded=true" width="100%" height="680px"></iframe>
      </div>
      <div className="my-4">
      </div>
      <Volver> </Volver>
    </div>
  );
}

function ManualMexico() {
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

export default ManualMexico;
