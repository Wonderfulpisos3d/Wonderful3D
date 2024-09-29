import React from "react";
import { useMediaQuery } from "react-responsive";
import Volver from "./Volver";

function Manualcito() {
  return (
    <div className="text-center min-h-screen flex flex-col justify-center">
      <div className="">
        <Volver> </Volver>
      </div>
      <div className="flex-grow flex justify-center items-center">
        <embed
          src="https://docs.google.com/viewer?srcid=1jUyxWAMjgKTWaD_RApndyHGwHhUnu6Gz&pid=explorer&efh=false&a=v&chrome=false&embedded=true&chrome=false&scrolling=auto&spread=2"
          page=""
          width="100%"
          height="680px"
        ></embed>
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
      <div className="my-4"></div>
      <div className="flex justify-center">
        <iframe
          src="https://drive.google.com/file/d/1jUyxWAMjgKTWaD_RApndyHGwHhUnu6Gz/preview"
          width="640"
          height="480"
          allow="autoplay"
        ></iframe>
      </div>
      <div className="my-4"></div>
      <Volver> </Volver>
    </div>
  );
}

function ManualUSA() {
  const esDispositivoMayorResolucion = useMediaQuery({ minWidth: 720 });

  return (
    <div>
      {esDispositivoMayorResolucion ? <Manualcito /> : <CalameoViewer />}
    </div>
  );
}

export default ManualUSA;
